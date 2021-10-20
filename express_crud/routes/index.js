const router = require("express")();
const User = require("./user");
const Read = require("./read");

router.use("/user", User);
router.use("/user", Read);

module.exports = router;