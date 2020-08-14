const traitemenCtrl = require("../../controllers/settings/traitementCtrl");
const { epidemie, medicau, perso } = require("../../middleware/traitement");
const router = require("express").Router();

/*
? Lecture
*/
router.get("/", traitemenCtrl.traitements);
/*
? Ajout et Modification
*/
router.post("/", epidemie, medicau, perso, traitemenCtrl.traitement);
router.put("/", medicau, perso, traitemenCtrl.updated);
router.put("/delete", traitemenCtrl.deleted);
router.put("/makeit", traitemenCtrl.makeitVisble);
/*
? Destroy
*/
router.delete("/", traitemenCtrl.destroy);
module.exports = router;
