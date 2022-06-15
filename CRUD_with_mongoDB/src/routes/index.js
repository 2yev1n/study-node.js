const express = require("express");
const router = express();
const Post = require("./post");
const User = require("./user");

router.use("/post", Post);
router.use("/user", User);

module.exports = router;