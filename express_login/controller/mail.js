const nodemailer = require("nodemailer");
const senderInfo = require("../config/senderinfo.json");


const mailSender = {
    sendGamil: function(param) {
        const transport = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: senderInfo.user,
                pass: senderInfo.pass
            }
        });
        const mailOptions = {
            from: senderInfo.user,
            to: param.toEmail,
            subject: param.subject,
            text: param.text
        };

        transport.sendMail(mailOptions, function(error, info) {
            if(error) {
                console.error(error);
            } else{
                console.log('Email sent: ' + info.response);
            }
        });
    }
}

module.exports = mailSender;