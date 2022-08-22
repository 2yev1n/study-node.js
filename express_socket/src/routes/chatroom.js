const router = require("express")();
const controller = require("../controllers/chatroom");

router.post("/", controller.createRoom);

module.exports = router;