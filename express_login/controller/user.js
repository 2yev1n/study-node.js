const user = require("../models/user");     
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { connect } = require("../routes");
const { mailer } = require("../routes/mail");

const sign_up = async(req, res) => {
    const {email, name, password} = req.body;   // 요청 받는 값들
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

const login = async (req, res) => {
    const { email, password } = req.body;
    const secretkey = req.app.get("jwt-secret");
    console.log(email, password, secretkey);
    try{
        const user = await User.findOne({
            where: {
                email,
                },
            });
            if(user.password === password) {
                const accessToken = jwt.sign(
                    {
                        id : user.id,
                        email : user.email,
                        name : user.name,
                    }, secretkey,
                    {
                        expiresIn: "1h",    //  유지시간 
                    }
                );
            res.status(200).json({
                message: "로그인 성공",
                accessToken,
            });
        } else {
            res.status(403).json({
                message: "로그인 실패",
            });
        }
    } catch(err){
        console.error(err);
        res.status(400).json({
            message: "존재하지 않은 유저",
        });
    }
};

module.exports = {
    sign_up,
    login,
};