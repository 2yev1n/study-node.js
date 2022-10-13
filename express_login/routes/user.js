const router = require("express")();
const controller = require("../controller/user");

router.post("/sign_up", controller.sign_up);
router.post("/login", controller.login);

module.exports = router;