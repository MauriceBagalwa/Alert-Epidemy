const router = require("express").Router();
const soinsmedicau = require("../../controllers/settings/s_medicauCtrl");

/*
? Selection
*/
router.get("/", soinsmedicau.medicinals);
router.get("/only", soinsmedicau.medicinalsWith);
/*
? Ajout
*/
router.post("/", soinsmedicau.medicinal);
/*
? Ajout et Modification
*/
router.put("/", soinsmedicau.modify);
router.put("/delete", soinsmedicau.deleted);
/*
? Surppresion
*/
router.delete("/", soinsmedicau.destroy);

module.exports = router;
