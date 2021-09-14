const router = require("express")();
const mailer = require("../controller/mail");

router.post("/mail", (req, res) => {
    const {email} = req.body;

    const emailParam = {
        toEmail: email,
        subject: "New Email",
        text: `nodemailer`
    };

    mailer.sendGamil(emailParam);

    res.status(200).send("이메일 발송 성공");
});

module.exports = router;