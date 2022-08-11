const { User } = require("../models/user");
const jwt = require("jsonwebtoken");

const signUp = async(req, res) => {
    const user = new User();

    try{
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;

        await user.save(user);

        return res.status(201).json({
            message: "회원가입 성공",
            user
        });
    } catch(err) {
        console.error(err);
        return res.status(400).json({
            message: "이미 가입한 이메일"
        });
    }
};

const login = async(req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const secretKey = req.app.get("jwt-secret");

    try{
        const user = await User.findOne({
            email
        });
        console.log(user);

        if(user.password === password) {
            const accessToken = await jwt.sign(
                {
                    email: user.email,
                    name: user.name,
                    _id: user._id
                }, secretKey,
                {
                    expiresIn: "1h"
                }
            );

            return res.status(200).json({
                message: "로그인 성공",
                accessToken
            });
        } else throw Error;
    } catch(err) {
        console.error(err);
        return res.status(400).json({
            message: "회원 찾을 수 없음"
        });
    }
}

module.exports = {
    signUp,
    login
};