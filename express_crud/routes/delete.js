const router = require("express")();
const controller = require("../controllers/delete");

router.post("/delete", controller.Delete);

module.exports = router;