const router = require("express")();
const post = require("./post");

router.use('/post', post);

module.exports = router;