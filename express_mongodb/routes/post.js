const router = require("express")();
const controller = require("../controllers/post");

router.post("/", controller.createPost);
router.get("/", controller.readAllPost);

module.exports = router;