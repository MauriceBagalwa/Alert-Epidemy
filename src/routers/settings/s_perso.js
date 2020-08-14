const persoCtrl = require("../../controllers/settings/s_persoCtrl");
const router = require("express").Router();
/*
? Selection
*/
router.get("/", persoCtrl.personnels);
router.post("/", persoCtrl.personnel);

module.exports = router;
