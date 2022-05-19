const router = require("express")();
const createPost = require("./create");
const deletePost = require("./delete");
const readPost = require("./read");
const updatePost = require("./update");
const searchPost = require("./search");
const user = require("./user");
const verifyToken = require("../middlewares/token");

router.use("/user", user);
router.use("/post", verifyToken, createPost, deletePost, readPost, updatePost, searchPost);

module.exports = router;