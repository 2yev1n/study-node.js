const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/user");

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: "user_id",
        passwordField: "password",
        session: true,
        passReqToCallback: false
    }, async (user_id, password, done) => {
        try {
            const user = await User.findOne({
                where: { user_id }
            })
            if(!user) {
                done(null, false, { message: "존재하지 않는 아이디입니다."});
            }
            if(user) {
                comparePassword(password, (passError, isMatch) => {
                    if(isMatch) {
                        return done(null, user);
                    }
                    return done(null, false, { message : "비밀번호가 틀렸습니다." });
                });
            }
        } catch(err){
            console.error(err);
            done(error);
        }
    }));

    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACKBOOK_SECRET,
        callbackURL: "http://localhost:8080/auth/facebook/callback"
    }, async (req, accessToken, refreshToken, profile, done) => {
        try{
            const user = await User.findOne({
                where: { user_id: profile.id },
            });
            if(!user) {
                const newUser = await User.create({
                    user_id: profile.id
                });
            };
            if(user) {
                done(null, user);
            }
        } catch(err) {
            console.error(err);
            done(error);
        }
    }))
};