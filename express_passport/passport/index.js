const passport = require("passport");
const local = require("./local");
const kakao = require("./kakao");
const facebook = require("./facebook");

const { User } = require("../models");

module.exports = () => {
    passport.serializeUser((user, done) => {
        console.log("dfa");
        return done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    local();
    kakao();
    facebook();
};