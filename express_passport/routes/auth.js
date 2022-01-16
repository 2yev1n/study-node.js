const router = require("express")();
const passport = require("passport");
const bcrypt = require("bcrypt");
const { isLoggedIn, isNotLoggedIn } = require("./middleware");
const { authenticate } = require("passport");

const User = require("../models/user")

router.post('/login', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if(authError) {
            console.error(authError);
            return next(authError);
        }
        if (!user) {
            return res.redirect(`/?loginError=${info.message}`);
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