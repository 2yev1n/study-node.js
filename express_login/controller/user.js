const jwt = require("jsonwebtoken");
const { User } = require("../models");
const crypto = require("crypto");

const salt = crypto.randomBytes(128).toString('base64');

const sign_up = async(req, res) => {
    const {email, name, password} = req.body;   // 요청 받는 값들
    // const email = req.body.email;
    // const name = req.body.name; 
    // const password = req.body.password;

    const hashPassWord = crypto
        .createHash('sha512')
        .update(password + salt)
        .digest('hex');
    try{
        await User.create({
                email,
                name,
                password : hashPassWord,
            });
        res.status(200).json({
            message: "성공"
        });
    } catch(err){
        res.status(409).json({
            message: "아이디 중복"
        });
        console.error(err);
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const secretkey = req.app.get("jwt-secret");
    console.log(email, password, secretkey);
    const hashPassWord = crypto
        .createHash('sha512')
        .update(password + salt)
        .digest('hex');
    try{
        const user = await User.findOne({
            where: {
                email,
                },
            });
            if(user.password === hashPassWord) {
                const accessToken = jwt.sign(
                    {
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