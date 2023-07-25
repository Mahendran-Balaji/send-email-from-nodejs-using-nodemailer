const path = require('path');
const express = require('express');
const app = express();
const dotenv = require('dotenv').config({ path: __dirname+'/.env' })
const env = dotenv.parsed;
const mail = require('./mail');
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