const router = require("express")();
const controller = require("../controllers/update");

router.post("/update", controller.Update);

module.exports = router;