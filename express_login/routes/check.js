const router = require("express")();
const controller = require("../controller/check");

router.post("/check", controller.check);

module.exports = router;