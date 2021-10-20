const router = require("express")();
const User = require("./user");
const Read = require("./read");
const Update = require("./update");
const Delete = require("./delete");

router.use("/user", User);
router.use("/user", Read);
router.use("/user", Update);
router.use("/user", Delete);

module.exports = router;