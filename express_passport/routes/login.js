const router = require("express")();
const { authenticate } = require("passport");
const passport = require("passport");

router.post("/login", passport, authenticate("local", {
    failureRedirect: '/'
}), (req, res) => {
    res.redirect('/');
});

router.get("/auth/facebook", 
    passport.authenticate("facebook", {
        authType: "rerequest", 
        scope: ["public_profile", "email"]
    })
);

router.get("/auth/facebook/callback", 
    passport.authenticate("facebook", {
        failureRedirect: "/"
    }),
    function(req, res) {
        res.redirect("/");
    }
);

module.exports = router;