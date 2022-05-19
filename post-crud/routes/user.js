const router = require("express")();
const controller = require("../controllers/user");

router.post("/", controller.signUp);
router.post("/login", controller.login);

module.exports = router;