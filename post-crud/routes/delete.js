const router = require("express")();
const controller = require("../controllers/delete");

router.delete("/:id", controller.deletePost);

module.exports = router;