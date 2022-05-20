const { User } = require("../models");
const jwt = require("jsonwebtoken");

const signUp = async(req, res) => {
    const { name, email, password } = req.body;

    try{
        await User.create({
            name,
            email,
            password
        });
        res.status(200).json({
            message: "회원가입 성공",
        });
    } catch (err){
        res.status(400).json({
            message: "중복된 이메일",
        });
        console.error(err);
    };
};

const login = async(req, res) => {
    const { email, password } = req.body;
    const secretKey = req.app.get("jwt-secret");

    try{
        const user = await User.findOne({
            where : {
                email : email
            }
        });

        if(user.password == password) {
            const accessToken = jwt.sign({
                id: user.id,
                email: user.email,
                name: user.name,
            },
            secretKey,
            {
                expiresIn: "1h",
            });

            res.status(200).json({
                message: "로그인 성공",
                accessToken,
            });
        } else {
            res.status(401).json({
                message: "로그인 실패"
            });
            console.error(err);
        }
    } catch(err) {
        res.status(401).json({
            message: "존재하지 않는 이메일",
        });
        console.error(err);
    };
};

module.exports = {
    signUp,
    login
};