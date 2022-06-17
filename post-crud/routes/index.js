const router = require("express")();
const post = require("./post");
const user = require("./user");

router.use("/user", user);
router.use("/post", post);

module.exports = router;