const router = require("express")();
const controller = require("../controllers/create");

router.post("/create",controller.Create);

module.exports = router;