const passport = require("passport");
const local = require("./local");
const kakao = require("./kakao");
const facebook = require("./facebook");

module.exports = () => {
    passport.serializeUser((user, done) => {
        return done(null, user);
    });

    passport.deserializeUser((user, done) => {
        return done(null, user);
    });

    local();
    kakao();
    facebook();
};