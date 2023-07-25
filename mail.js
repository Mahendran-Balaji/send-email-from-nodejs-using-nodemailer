const dotenv = require('dotenv').config({ path: __dirname+'/.env' })
const env = dotenv.parsed;
const nodemailer = require('nodemailer');

    function sendMail()
    {
        console.log('inside send mail');
        const mailOptions = {
            to: 'mahendran@mailinator.com',
            from: env.MAIL_FROM,
            subject: 'Test Local Node JS Email',
            text: 'Hi Buddy',
            html: "<b>Hello world?</b>",
        };


        const transporter = nodemailer.createTransport({
            host: env.MAIL_HOST,
            port: env.MAIL_PORT,
            secure: env.MAIL_SECURE,
            auth: {
                user: env.MAIL_USERNAME,
                pass: env.MAIL_PASSWORD
            },
        });

        try
        {
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });

        }catch (e) {
            console.log(e);
        }
}

module.exports = { sendMail };