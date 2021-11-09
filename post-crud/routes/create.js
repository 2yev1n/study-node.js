const router = require("express")();
const controller = require("../controllers/create");

router.post("/create", controller.createPost);

module.exports = router;