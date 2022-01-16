const router = require("express")();
const auth = require("./auth");

router.use("/auth", require("./auth"));

module.exports = router;