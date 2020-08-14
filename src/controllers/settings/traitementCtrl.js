const db = require("../../models");
const shordid = require("shortid");
const createError = require("http-errors");

module.exports = {
  /** 
    #traitements
   * la fonction nous permet 
   * de faire une selection generale des données
  **/
  traitements: async (req, res, next) => {
    let items = [];
    items = await db.traitement.findAll({ where: { deleted: false } });
    let formattedTraitements = items.map(
      (traitement) =>
        new Promise(function (resolve) {
          db.epidemie
            .findOne({ where: { id: traitement.epidemie } })
            .then((epidemie) => {
              traitement.epidemie = epidemie;
              db.soinsmedicau
                .findOne({
                  where: { id: traitement.medicau },
                })
                .then((medoc) => {
                  traitement.medicau = medoc;
                  db.soinsperso
                    .findOne({
                      where: { id: traitement.perso },
                    })
                    .then((perso) => {
                      traitement.perso = perso;
                      resolve(traitement);
                    });
                });
            });
        })
    );
    items = await Promise.all(formattedTraitements);
    res.json({ items });
  },
  /** 
    ? #traitementOnly
    * la fonction nous permet 
    * de faire une selection des données selon une restruction
  **/
  traitementOnly: (req, res, next) => {
    db.traitement
      .findAll({ where: { deleted: !req.body.deleted } })
      .then((traitements) => {
        res.send({ traitements });
      });
  },
  /**
    ? #traitement
    * cete fonction nous permet 
    * de faire l'ajout des traitements
  */
  traitement: (req, res, next) => {
    const { epidemie, medicau, perso } = req.body;
    const use = module.exports;
    db.traitement
      .findOne({
        where: { epidemie: epidemie, medicau: medicau, perso: perso },
      })
      .then((find) => {
        if (find)
          res.json({ message: `Traitement for ${epidemie} is already exist` });
        else {
          const values = {
            id: shordid.generate(),
            epidemie: epidemie,
            medicau: medicau,
            perso: perso,
          };
          db.traitement
            .create(values)
            .then((iscreate) => {
              res.json({ iscreate });
            })
            .catch((err) => {
              next(err);
            });
        }
      })
      .catch((err) => {
        next(err);
      });
  },
  /**
    ? #updated
    * cete fonction nous permet 
    * de faire la modification des epidemie
  */
  updated: (req, res, next) => {
    const { id, medicau, perso } = req.body;
    db.traitement
      .findOne({
        where: { id: id },
      })
      .then((find) => {
        if (!find) res.send({ message: `Treatment not found` });
        else {
          const values = {
            medicau: medicau,
            perso: perso,
          };
          find
            .update(values)
            .then((isUpdate) => {
              res.json(isUpdate);
              // use.traitements(req, res);
            })
            .catch((err) => {
              next(err);
            });
        }
      })
      .catch((err) => {
        next(err);
      });
  },

  /*
   ? La fonction deleted
   * Rendre invisible la donnée auprès
   * d'un tierse personne
  */
  deleted: (req, res, next) => {
    const { id } = req.body;
    db.traitement
      .findOne({ where: { id: id } })
      .then((find) => {
        if (!find) res.json({ message: `Epidemic not found` });
        else
          find
            .update({ deleted: !find.deleted })
            .then((deleted) => {
              res.json({ message: `Epidemic successfully remove` });
            })
            .catch((err) => {
              next(err);
            });
      })
      .catch((err) => {
        next(err);
      });
  },
  /*
 ? La fonction #makeitVisble
 * Rend visible la donnée rendu invisible au 
 * auprès de tierse personne
*/
  makeitVisble: (req, res, next) => {
    const { id } = req.body;
    db.traitement
      .findOne({ where: { id: id } })
      .then((find) => {
        if (!find) res.json({ message: `Epidemic not found` });
        else
          find
            .update({ deleted: false })
            .then((epidemic) => {
              res.send({ epidemic });
            })
            .catch((err) => {
              next(err);
            });
      })
      .catch((err) => {
        next(err);
      });
  },
  /**
 ? La fonction #destroy
 * Effacé definictivement la donnée
 */
  destroy: (req, res, next) => {
    const { id } = req.body;
    db.traitement
      .findOne({ where: { id: id } })
      .then((find) => {
        if (!find) res.json({ message: `Epidemic not found` });
        else
          find
            .destroy({ where: { id: id } })
            .then(() => {
              res.json({ message: `Epidemic successfully remove` });
            })
            .catch((err) => {
              next(err);
            });
      })
      .catch((err) => {
        next(err);
      });
  },
};
