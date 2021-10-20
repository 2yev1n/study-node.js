const router = require("express")();
const controller = require("../controllers/user");

router.post("/sign_up",controller.sign_up);

module.exports = router;