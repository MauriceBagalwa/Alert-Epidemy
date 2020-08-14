const epidemieCtrl = require("../../controllers/concern/epidemieCtrl");
const router = require("express").Router();

/*
? Lecture
*/
router.get("/", epidemieCtrl.epidemies);
/*
? Ecriture
*/
router.post("/", epidemieCtrl.epidemie);
router.put("/", epidemieCtrl.updated);
router.put("/delete", epidemieCtrl.deleted);
router.put("/makeit", epidemieCtrl.makeitVisble);
/*
? Destroy
*/
router.delete("/", epidemieCtrl.destroy);
module.exports = router;
