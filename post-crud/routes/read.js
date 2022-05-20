const router = require("express")();
const controller = require("../controllers/read");

router.get("/", controller.allViews)
router.get("/mypage", controller.viewMyPage);
router.get("/:id", controller.readOnePost);

module.exports = router;