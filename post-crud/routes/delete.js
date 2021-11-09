const router = require("express")();
const controller = require("../controllers/delete");

router.post("/delete", controller.deletePost);

module.exports = router;