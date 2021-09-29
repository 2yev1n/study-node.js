const router = require("express")();
const User = require("./user");
const {mail} = require("./mail");

router.use("/user", User);
router.use("/user", mail);

module.exports = router;