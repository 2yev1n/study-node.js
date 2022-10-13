const { User } = require("../models");

const check = async(req, res) => {
    const { number } = req.body;
    
    try{
        const checkingNum = User.findOne({
            where: {
                email
            }
        });

        console.log(checkingNum);
        console.log(number);

        if(checkingNum === number) {
            res.status(200).json({
                message: "인증번호 일치"
            });
        } else {
            res.status(409).json({
                message: "인증번호 불일치"
            });
        }
    } catch(err) {
        res.status(409).json({
            messagse: "오류"
        });
    }
};

module.exports = { check };