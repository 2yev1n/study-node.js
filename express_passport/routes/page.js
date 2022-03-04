const router = require("express")();
const { isLoggedIn, isNotLoggedIn } = require("./middleware");
const { Post, User } = require("../models");

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.followerCount = 0;
    res.locals.follwingCount = 0;
    res.locals.followerList = [];
    next();
});

router.get("/profile", isLoggedIn, (req, res) => {
    res.render('profile', { title: "내 정보" });
});

router.get("/join", isNotLoggedIn, (req, res) => {
    res.render('join', { title: "회원가입" });
});

router.get("/", async(req, res, next) => {
    try {
        const posts = await Post.findAll({
            include: {
                model: User,
                attribites: ['id', 'nick'],
            },
            order: [['createdAt', 'DESC']],
        });
        res.render('main', {
            title: 'ASSU',
            twits: posts,
        });
    } catch(err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;

