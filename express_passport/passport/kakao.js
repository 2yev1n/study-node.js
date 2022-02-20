const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;
const bcrypt = require("bcrypt");

const { User } = require("../models");

module.exports = () => {
    passport.use(new KakaoStrategy({
        clientID: process.env.KAKAO_ID,
        callbackURL: "/auth/kakao/callback",
    }, async(accessToken, refreshToken, profile, done) => {
        console.log(profile);
        console.log(accessToken);
        console.log(refreshToken);

        const hashPassword = bcrypt.hashSync(
            JSON.stringify(profile.id), 10
        );

        console.log(hashPassword);
            
        try {
            const exUser = await User.findOne({
                where: {
                    snsID : profile.id,
                    provider: 'kakao'
                },
            });
            if (exUser) {
                done(null, exUser);
            } else if (!exUser) {
                const newUser = await User.create({
                    email: profile._json.kakao_account.email,
                    snsID: profile.id,
                    provider: 'kakao',
                    password: hashPassword
                });
                done(null, newUser);
            }
        } catch (err) {
            console.error(err);
            done(err);
        };
    }));
};
