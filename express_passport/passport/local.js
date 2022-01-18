const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const { User } = require("../models");

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
    }, async(email, password, done) => {
        try{
            const exUser = await User.findOne({
                 where: { email } 
            });
            console.log(exUser);
            if (exUser) {
                await bcrypt.compare(JSON.stringify(password), exUser.password, (err, same) => {
                    if (err) {
                        console.log(exUser.password);
                        console.log(password);
                        return done(null, false, {
                            message: "비밀번호가 일치하지 않음"
                        });
                    }
                    else if (same) {
                        console.log(exUser);
                        return done(null, exUser);
                    }
                });
            } else {
                return done(null, false, { message : "찾을 수 없는 회원입니다." });
            }
        } catch (err) {
            console.error(err);
            return done(err);
        }
    }));
};