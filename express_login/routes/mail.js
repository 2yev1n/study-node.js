const router = require("express")();
const controller = require("../controller/mail");
const tool = require("../controller/check");

router.post("/mail", controller.sendMail);
router.post("/mail/check", tool.check);

module.exports = router;