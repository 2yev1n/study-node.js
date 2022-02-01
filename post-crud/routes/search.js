const router = require("express")();
const controller = require("../controllers/search");

router.get("/search/:searchWord", controller.searchPost);

module.exports = router;