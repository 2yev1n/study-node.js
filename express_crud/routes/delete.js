const router = require("express")();
const controller = require("../controllers/delete");

router.post("/deleteone", controller.deleteOne);
router.get("/deleteall", controller.deleteAll);

module.exports = router;