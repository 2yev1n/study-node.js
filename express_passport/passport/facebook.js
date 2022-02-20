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
                where: { snsID: profile.id,
                         provider: 'facebook' },
            });
            if(user) {
                done(null, exUser);
            } 
            else if (!exUser) {
                const newUser = await User.create({
                    snsID: profile.id,
                    provider: 'facebook'
                });
                done(null, newUser);
            };
        } catch (err) {
            console.error(err);
            done(error);
        };
    }));
};