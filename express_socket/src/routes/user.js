const router = require("express")();
const controller = require("../controllers/user");

router.post("/signup", controller.signUp);
router.post("/login", controller.login);

module.exports = router;