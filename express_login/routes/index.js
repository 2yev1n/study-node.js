const router = require("express")();
const User = require("./user");
const Mail = require("./mail");

router.use("/user", User);
router.use("/user", Mail);

module.exports = router;