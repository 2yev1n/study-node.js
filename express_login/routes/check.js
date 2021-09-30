const router = require("express")();
const controller = require("./mail");

router.post("/check", controller.check);

module.exports = router;