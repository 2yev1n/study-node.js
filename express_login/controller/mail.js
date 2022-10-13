const mailer = require("../middleware/mail");
const { User } = require("../models");

const sendMail = async (req, res) => {
    const { email } = req.body;
    
    authNum = Math.random().toString().substr(2,6);

    User.update({
        checkingNum : authNum
    },{
        where: { email }
    });

    const emailParam = {
        toEmail: email,
        subject: "New Email",
        text: authNum
    };

    mailer.sendGamil(emailParam);

    res.status(200).send("이메일 발송 성공");
    console.log(authNum);
};

module.exports = {
    sendMail
};