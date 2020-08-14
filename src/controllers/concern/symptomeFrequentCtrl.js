const db = require("../../models");
const shortid = require("shortid");

module.exports = {
  frequents: (req, res, next) => {
    db.symptomefrequent
      .findAll({ where: { deleted: false } })
      .then((symptomeFrequents) => {
        res.json(symptomeFrequents);
      })
      .catch((err) => {
        next(err);
      });
  },
  frequent: (req, res, next) => {
    const { symptome, description } = req.body;
    db.symptomefrequent
      .findOne({ where: { deleted: false }, symptome: symptome })
      .then((find) => {
        if (find) res.json(`Symptome is already exist`);
        else {
          const values = {
            id: shortid.generate(),
            symptome: symptome,
            description: description,
          };
          db.symptomefrequent.create(values).then((create) => {
            res.json(create);
          });
        }
      })
      .catch((err) => {
        next(err);
      });
  },
  updated: (req, res, next) => {
    const { id, symptome, description } = req.body;
    db.symptomefrequent
      .findOne({ where: { deleted: false, id: id } })
      .then((find) => {
        if (!find) res.json(`Symptome not found`);
        else {
          const values = {
            symptome: symptome,
            description: description,
          };
          db.symptomefrequent.update(values).then((update) => {
            res.json(update);
          });
        }
      })
      .catch((err) => {
        next(err);
      });
  },

  deleted: (req, res, next) => {
    const { id } = req.body;
    db.symptomefrequent
      .findOne({ where: { id: id } })
      .then((find) => {
        if (!find) res.json({ message: `SymptomeFrequent not found` });
        else
          find
            .update({ deleted: !find.deleted })
            .then((deleted) => {
              res.json({ message: `SymptomeFrequent successfully remove` });
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
    db.symptomefrequent
      .findOne({ where: { id: id } })
      .then((find) => {
        if (!find) res.json({ message: `SymptomeFrequent not found` });
        else
          find
            .destroy({ where: { id: id } })
            .then(() => {
              res.json({ message: `SymptomeFrequent successfully remove` });
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
