const auth_ = require("./auth/user");
const soinsmedicau_ = require("./settings/s_medicau");
const soinsperso_ = require("./settings/s_perso");
const epidemie_ = require("./concern/epidemie");
const traitement_ = require("./settings/traitement");
const symptomeFreuent_ = require("./concern/symptomeF");

module.exports = {
  auth_,
  soinsmedicau_,
  soinsperso_,
  epidemie_,
  traitement_,
  symptomeFreuent_,
};
