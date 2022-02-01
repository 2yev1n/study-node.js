const router = require("express")();
const createPost = require("./create");
const deletePost = require("./delete");
const readPost = require("./read");
const updatePost = require("./update");
const searchPost = require("./search");

router.use("/post", createPost, deletePost, readPost, updatePost, searchPost);

module.exports = router;