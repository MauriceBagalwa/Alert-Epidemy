const models = require("../../models");
const shortid = require("shortid");
const createError = require("http-errors");

module.exports = {
  /*
   ? #  personnels
   * la fonction nous permet 
   * de faire une selecton generale des données
  */
  personnels: (req, res, next) => {
    models.soinsperso
      .findAll({ where: { deleted: false } })
      .then((find) => {
        res.send({ find });
      })
      .catch((error) => {
        next(error);
      });
  },
  personnelsWith: (req, res, next) => {
    models.soinsperso
      .findAll({ where: { deleted: req.body.deleted } })
      .then((find) => {
        res.send({ find });
      })
      .catch((error) => {
        next(error);
      });
  },
  /*
   ? #personnel
   * la fonction d'ajout
  */
  personnel: (req, res, next) => {
    const { description } = req.body;
    const use = module.exports;
    models.soinsperso
      .findOne({ where: { description: description } })
      .then((find) => {
        if (find) res.send({ message: `soins is already exist...` });
        else {
          const values = {
            id: shortid.generate(),
            description: description,
          };
          models.soinsperso
            .create(values)
            .then((create) => {
              use.personnels(req, res);
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
    models.soinsperso
      .findOne({ where: { id: id } })
      .then((find) => {
        find
          .update({ description: description })
          .then((update) => {
            res.send({ update });
          })
          .catch((err) => {
            next(err);
          });
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
    models.soinsperso
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
   ? La fonction #destroy
   * Effacé definictivement la donnée
  */
  destroy: (req, res, next) => {
    const { id } = req.body;
    const use = module.exports;
    models.soinsperso
      .findOne({ where: { id: id } })
      .then((find) => {
        if (!find) res.send({ message: `soins introuvale...` });
        else
          find
            .destroy({ where: { id: id } })
            .then((deleted_) => {
              use.personnels(req, res);
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
