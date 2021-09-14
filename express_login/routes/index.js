const router = require("express")();
const User = require("./user");
const Mailer = require("./mail");

router.use("/user", User);
router.use("/user", Mailer);

module.exports = router;