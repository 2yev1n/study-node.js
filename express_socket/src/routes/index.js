const router = require("express")();
const User = require("./user");
const Chatroom = require("./chatroom");

router.use("/user", User);
router.use("/chatroom", Chatroom);

module.exports = router;