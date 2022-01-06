const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: "user_id",
        passwordField: "password",
        session: true,
        passReqToCallback: false
    }, (user_id, password, done) => {
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
};