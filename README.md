# send-email-from-nodejs-using-nodemailer
Send email from node js application using nodemailer package

Step 1: Setup new npm package

```bash
  npm init
```
Step 2 : Install the following packages: express, dotenv, nodemailer

```bash
 npm install express
```
```bash
 npm install dotenv
```

```bash
 npm install nodemailer
```

Step 3: Create a new .env file in the root directory

Step 4: Add Following Code into the .env file

```javascript
PORT_NUMBER = 3001
MAIL_HOST=**************    /* Mail Host Name (Ex: smtp.gmail.com) */
MAIL_USERNAME=************  /* Mail username */
MAIL_PASSWORD=**********    /* Mail password or app password */
MAIL_PORT=465               /* 465 0r 587 */
MAIL_SERVICE=gmail          /* Email Service : (Ex: gmail) */
MAIL_SECURE=false           /* True or False */
MAIL_FROM=**************    /* From Email Address */
```
Step 5 : To create index.js file add following code

```javascript
const path = require('path');
const express = require('express');
const app = express();
const dotenv = require('dotenv').config({ path: __dirname+'/.env' })
const env = dotenv.parsed;
const mail = require('./mail');  /* Add External mail.js File */
const portNumber = env.PORT_NUMBER;

    app.get('/',(req,res) => {
        try {
            mail.sendMail();
            res.send("Hello Friends.");
        }
        catch (e) {
            console.log('Error :'+e);
        }
    });

    app.listen(portNumber,() => {
        console.log(`listening on port ${portNumber}!`);
    });
```

Step 6 : To create index.js file add following code

```javascript
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
```

Step 7: Run the application

```bash
  node index.js
```

## Author

- [@Mahendran-Balaji](https://github.com/Mahendran-Balaji/)
