const router = require("express")();
const controller = require("../controllers/update");

router.patch("/:id", controller.updatePost);

module.exports = router;