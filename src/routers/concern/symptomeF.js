const router = require("express").Router();
const frequentController = require("../../controllers/concern/symptomeFrequentCtrl");
router.get("/", frequentController.frequents);
router.post("/", frequentController.frequent);
router.put("/", frequentController.updated);
router.put("/delete", frequentController.deleted);
router.delete("/", frequentController.destroy);

module.exports = router;
