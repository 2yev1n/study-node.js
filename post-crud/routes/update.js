const router = require("express")();
const controller = require("../controllers/update");

router.post("/update", controller.updatePost);

module.exports = router;