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
            if (exUser) {
                await bcrypt.compare(password, exUser.password, (err, same) => {
                    if (err) {
                        done(null, false, {
                            message: "비밀번호가 일치하지 않음"
                        });
                    }
                    else if (same) {
                        done(null, exUser);
                    }
                });
            } else {
                done(null, false, { message : "찾을 수 없는 회원입니다." });
            }
        } catch (err) {
            console.error(err);
            done(err);
        }
    }));
};