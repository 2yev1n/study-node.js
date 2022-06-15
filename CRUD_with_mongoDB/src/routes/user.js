const express = require("express");
const router = express();
const controller = require("../controllers/user");

router.post("/signup", controller.signUp);

module.exports = router;