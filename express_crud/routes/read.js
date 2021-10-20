const router = require("express")();
const controller = require("../controllers/read");

router.post("/readone", controller.readOne);
router.post("/readall", controller.readAll);

module.exports = router;