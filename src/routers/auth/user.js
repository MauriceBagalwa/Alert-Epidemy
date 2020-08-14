const router = require("express").Router();
const userCtrl = require("../../controllers/auth/user");

router.get("/users", userCtrl.signup);
router.post("/user", userCtrl.signup);

module.exports = router;
