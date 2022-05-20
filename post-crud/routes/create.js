const router = require("express")();
const controller = require("../controllers/create");

router.post("/", controller.createPost);

module.exports = router;