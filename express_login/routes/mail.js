const router = require("express")();
const mailer = require("../controller/mail");

let authNum;

router.post("/mail", (req, res) => {
    const { email } = req.body;
    
    authNum = Math.random().toString().substr(2,6);

    const emailParam = {
        toEmail: email,
        subject: "New Email",
        text: authNum
    };

    mailer.sendGamil(emailParam);

    res.status(200).send("이메일 발송 성공");
    console.log(authNum);
});

const check = async(req, res) => {
    const { number } = req.body;
    try{
        console.log(authNum);
        console.log(number);
        
        if(authNum === number) {
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


router.use("/mail", check);

module.exports = {
    Mail:router,
    check
};