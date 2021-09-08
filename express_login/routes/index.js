const router = require("express")();
const User = require("./user");

router.use("/user", User);

module.exports = router;