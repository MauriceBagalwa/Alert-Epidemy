const models = require("../../models");
const shortid = require("shortid");
module.exports = {
  /*
   ? #medicinals & #medicinals_with
   * la fonction nous permet 
   * de faire une selecton generale des données
  */
  medicinals: (req, res, next) => {
    models.soinsmedicau
      .findAll({ where: { deleted: false } })
      .then((find) => {
        res.send({ find });
      })
      .catch((error) => {
        next(error);
      });
  },
  medicinalsWith: (req, res, next) => {
    models.soinsmedicau
      .findAll({ where: { deleted: req.body.deleted } })
      .then((find) => {
        res.send({ find });
      })
      .catch((error) => {
        next(error);
      });
  },
  /*
   ? #medicinal
   * la fonction d'ajout
  */
  medicinal: (req, res, next) => {
    const { description } = req.body;
    const use = module.exports;
    models.soinsmedicau
      .findOne({ where: { description: description } })
      .then((find) => {
        if (find) res.send({ message: `Description is already exist...` });
        else {
          const values = {
            id: shortid.generate(),
            description: description,
          };
          models.soinsmedicau
            .create(values)
            .then((create) => {
              use.medicinals(req, res);
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
    * Modification du donnée selectionner
   */
  modify: (req, res, next) => {
    const { id, description } = req.body;
    models.soinsmedicau
      .findOne({ where: { id: id } })
      .then((find) => {
        if (!find) res.send({ message: "Description is not Found" });
        else {
          find
            .update({ description: description })
            .then((update) => {
              res.send({ update });
            })
            .catch((err) => {
              next(err);
            });
        }
      })
      .catch((error) => {
        next(error);
      });
  },
  /*
   ? La fonction deleted
   * Rendre invisible la donnée auprès
   * d'un tierse personne
  */
  deleted: (req, res, next) => {
    const { id } = req.body;
    models.soinsmedicau
      .findOne({ where: { id: id } })
      .then((find) => {
        find
          .update({ deleted: !find.deleted })
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
   ? La fonction #makeitVisble
   * Rend visible la donnée rendu invisible au 
   * auprès d'un tierse personne
  */
  makeitVisble: (req, res, next) => {
    const { id } = req.body;
    models.soinsmedicau
      .findOne({ where: { id: id } })
      .then((find) => {
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
    models.soinsmedicau
      .findOne({ where: { id: id } })
      .then((find) => {
        if (!find) res.send({ message: `soins introuvale...` });
        else
          find
            .destroy({ where: { id: id } })
            .then((deleted_) => {
              use.medicinals(req, res);
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
