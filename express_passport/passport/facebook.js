const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;

const { User } = require("../models");

module.exports = () => {
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACKBOOK_SECRET,
        callbackURL: "/auth/facebook/callback"
    }, async (req, accessToken, refreshToken, profile, done) => {
        console.log(profile);
        
        try{
            const exUser = await User.findOne({
                where: { userId: profile.id,
                         provider: 'kakao' },
            });
            if(user) {
                done(null, exUser);
            } 
            else if (!exUser) {
                const newUser = await User.create({
                    userId: profile.id,
                    provider: 'kakao'
                });
                done(null, newUser);
            };
        } catch (err) {
            console.error(err);
            done(error);
        };
    }));
};