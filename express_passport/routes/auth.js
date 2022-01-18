const router = require("express")();
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("./middleware");
const { authenticate } = require("passport");

const { User } = require("../models");

router.post("/join", isNotLoggedIn, async(req, res, next) => {
    const { email, password } = req.body;
    try{
        const exUser = await User.findOne({
            where: { email }
        });
        if (exUser) {
            res.status(409).json({
                message: "이미 계정이 있는 이메일"
            })
        } else {
            const hashPassword = await bcrypt.hash( JSON.stringify(password), 10);
            const user = await User.create({
                email,
                password : hashPassword,
            });
            res.status(200).json({
                message: "회원가입 성공!",
                user
            });
        }
        return res.redirect("/");
    } catch (err) {
        console.error(err);
        next(err);
    }
})

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if(authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            return res.status(409).json({
                message: "로그인 실패",
            });
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.redirect("/");
        });
    }) (req, res, next);
});

router.get("/logout", isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.redirect("/");
});

router.get("/facebook", 
    passport.authenticate("facebook")
);

router.get("/facebook/callback", 
    passport.authenticate("facebook", {
        failureRedirect: "/"
    }),
    function(req, res) {
        res.redirect("/");
    }
);

router.get("/kakao",
    passport.authenticate("kakao")
);

router.get("/kakao/callback",
    passport.authenticate("kakao", {
        failureRedirect: "/"
    }),
    function(req, res) {
        res.redirect("/");
    }
);


module.exports = router;