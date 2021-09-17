const router = require("express")();
const mailer = require("../controller/mail");

router.post("/mail", (req, res) => {
    let authNum = Math.random().toString().substr(2,6);
    const {email} = req.body;

    const emailParam = {
        toEmail: email,
        subject: "New Email",
        text: authNum
    };

    mailer.sendGamil(emailParam);

    res.status(200).send("이메일 발송 성공");
});

module.exports = router;