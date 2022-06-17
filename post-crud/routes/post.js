const router = require("express")();
const controller = require("../controllers/post");
const verifyToken = require("../middlewares/token");

router.post("/", verifyToken, controller.createPost);
router.patch("/:id", verifyToken, controller.createPost);
router.delete("/:id", verifyToken, controller.deletePost);
router.get("/", controller.readAllPost)
router.get("/mypage", verifyToken, controller.readMyPage);
router.get("/:id", controller.readOnePost);

module.exports = router;