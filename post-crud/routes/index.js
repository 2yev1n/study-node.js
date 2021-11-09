const router = require("express")();
const createPost = require("./create");
const deletePost = require("./delete");
const readPost = require("./read");
const updatePost = require("./update");

router.use("/post", createPost, deletePost, readPost, updatePost);

module.exports = router;