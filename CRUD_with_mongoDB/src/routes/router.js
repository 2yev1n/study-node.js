const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.read);
router.post("/", controller.create);
router.patch("/:id", controller.update);
module.exports = router;