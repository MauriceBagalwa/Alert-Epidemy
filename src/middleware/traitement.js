const models = require("../models");
module.exports = {
  epidemie: (req, res, next) => {
    models.epidemie
      .findOne({ where: { id: req.body.epidemie } })
      .then((find) => {
        if (!find) res.send({ message: `Epidemie not Found...` });
        else next();
      })
      .catch((err) => {
        next(err);
      });
  },
  medicau: (req, res, next) => {
    models.soinsmedicau
      .findOne({ where: { id: req.body.medicau } })
      .then((find) => {
        if (!find) res.send({ message: `Soin medicau not Found...` });
        else next();
      })
      .catch((err) => {
        next(err);
      });
  },
  perso: (req, res, next) => {
    models.soinsperso
      .findOne({ where: { id: req.body.perso } })
      .then((find) => {
        if (!find) res.send({ message: `Soin perso not Found...` });
        else next();
      })
      .catch((err) => {
        next(err);
      });
  },
};
