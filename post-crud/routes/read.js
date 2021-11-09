const router = require("express")();
const controller = require("../controllers/read");

router.post("/readOne", controller.readOnePost);
router.post("/readAll", controller.readAllPost);

module.exports = router;