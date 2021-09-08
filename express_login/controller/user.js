const user = require("../models/user");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { connect } = require("../routes");
//const user = require("../models/user");

const sign_up = async(req, res) => {
    const {email, name, password} = req.body;
    // const email = req.body.email;
    // const name = req.body.name;
    // const password = req.body.password;
    
    try{
        await User.create({
            email,
            name,
            password,
        });
        res.status(200).json({
            message: "성공"
        });
    } catch(err){
        res.status(409).json({
            message: "아이디 중복"
        });
    }
};

const login = async(req, res) => {
    const {email, password} = req.body;
    const secret = req.app.get("jwt-secret");

    try{
        const User = await User.findOne({
            where: {
                email,
            },
        });
        if(user.password === password) {
            const accessToken = jwt.sign(
                {
                    email : user.email,
                    name : user.name,
                    password : user.password,
                }, secretKey,
                {
                    expiresIn: "1h",
                }
            );
            res.status(200).json({
                message: "로그인 성공"
            });
        }
    }catch(err){
        res.status(400).json({
            message: "로그인 실패"
        });
    }
};

module.exports = {
    sign_up,
    login
};