const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.readPost);
router.post("/", controller.createPost);
router.patch("/:id", controller.updatePost);
router.delete("/:id", controller.deletePost);

module.exports = router;