const express = require("express");
const router = express();
const controller = require("../controllers/post");

router.get("/", controller.readPost);
router.post("/", controller.createPost);
router.patch("/:id", controller.updatePost);
router.delete("/:id", controller.deletePost);
router.get("/:id", controller.readOnePost);

module.exports = router;