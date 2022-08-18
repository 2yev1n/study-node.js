const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
const crypto = require("crypto"); 

const salt = process.env.SALT;

const signUp = async(req, res) => {
    const user = new User();
    
    const { name, email, password } = req.body;
    const hashPassword = crypto
        .createHash('sha512')
        .update(password + salt)
        .digest('hex');

    try{
        user.name = name;
        user.email = email;
        user.password = hashPassword;
        
        user.save(user);

        return res.status(201).json({
            message: "회원가입 성공",
            user
        });
    } catch(err) {
        console.error(err);
        
        return res.status(400).json({
            message: "이미 가입된 이메일"
        });
    };
};

const login = async(req, res) => {
    const { email, password } = req.body;
    const secretKey =  req.app.get("jwt-secret");

    const hashPassword = crypto
        .createHash('sha512')
        .update(password + salt)
        .digest('hex');

    try{
        const user = await User.findOne({
            email
        });
        console.log(user);

        if(user.password === hashPassword) {
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
            message: "로그인 실패"
        });
    };
};

module.exports = {
    signUp,
    login
};