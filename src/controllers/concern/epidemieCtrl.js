const models = require("../../models");
const shortid = require("shortid");

module.exports = {
  /*
   ? #epidemies 
   * la fonction nous permet 
   * de faire une selection generale des données
  */
  epidemies: (req, res, next) => {
    models.epidemie
      .findAll({ where: { deleted: false } })
      .then((epidemies) => {
        res.send({ epidemies });
      })
      .catch((err) => {
        next(err);
        u;
      });
  },
  /*
    ? #epidemies
    * la fonction nous permet 
    * de faire une selection des données selon une restruction
  */
  epidemieOnly: (req, res, next) => {
    models.epidemie
      .findAll({ where: { deleted: req.body.deleted } })
      .then((epidemies) => {
        res.send({ epidemies });
      })
      .catch((err) => {
        next(err);
      });
  },
  /*
    ? #epidemie
    * cete fonction nous permet 
    * de faire l'ajout des epidemie
  */
  epidemie: (req, res, next) => {
    const use = module.exports;
    const { epidemie } = req.body;
    models.epidemie
      .findOne({ where: { epidemie: epidemie } })
      .then((find) => {
        if (find) res.send({ mesage: `${epidemie} is already exist` });
        else {
          const values = {
            id: shortid.generate(),
            epidemie: epidemie,
          };
          models.epidemie
            .create(values)
            .then((added) => {
              res.send({ added });
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
    ? #updated
    * cete fonction nous permet 
    * de faire la modification des epidemie
  */
  updated: (req, res, next) => {
    const { id, epidemie } = req.body;
    models.epidemie.findOne({ where: { id: id } }).then((find) => {
      if (!find) res.send({ message: "Epidemie not Found..." });
      else {
        find
          .update({ epidemie: epidemie })
          .then((isupdate) => {
            res.send({ isupdate });
          })
          .catch((err) => {
            next(err);
          });
      }
    });
  },
  /*
   ? La fonction deleted
   * Rendre invisible la donnée auprès
   * d'un tierse personne
  */
  deleted: (req, res, next) => {
    const { id } = req.body;
    const use = module.exports;
    models.epidemie
      .findOne({ where: { id: id } })
      .then((find) => {
        if (!find) res.send({ message: `Epidemie not Found...` });
        else
          find
            .update({ deleted: !find.deleted })
            .then((deleted_) => {
              use.epidemies(req, res);
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
    models.epidemie
      .findOne({ where: { id: id } })
      .then((find) => {
        if (!find) res.send({ message: `Epidemie not Found...` });
        else
          find
            .update({ deleted: false })
            .then((deleted_) => {
              res.send({ deleted_ });
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
   ? La fonction #destroy
   * Effacé definictivement la donnée
  */
  destroy: (req, res, next) => {
    const { id } = req.body;
    const use = module.exports;
    models.epidemie
      .findOne({ where: { id: id } })
      .then((find) => {
        if (!find) res.send({ message: `Epidemie not Found` });
        else
          find
            .destroy({ where: { id: id } })
            .then((deleted_) => {
              use.epidemies(req, res);
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
