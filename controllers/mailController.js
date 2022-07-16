const nodemailer = require('nodemailer');
require('dotenv').config()
exports.sendEmail = async(req, res) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.outlook.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USERNAME, // generated ethereal user
                pass: process.env.EMAIL_PASSWORD, // generated ethereal password
            },
        });

        let message = {
            from: 'vintonmogakajuniour@outlook.com', // sender address
            to: "vintonjuniour@gmail.com, muthonirachael50@gmail.com", // list of receivers
            subject: "Meeting", // Subject line
            text: "Hello, have a look at these files", // plain text body
            attachments: [{ // utf-8 string as an attachment
                    filename: 'text1.txt',
                    content: 'hello world!'
                },
                { // file on disk as an attachment
                    filename: 'config.js',
                    path: 'C:/Users/King Vinton Jr/Desktop/Jitu Projects/Ecormerce-Site/product-service/config/config.js' // stream this file
                },
            ],
        }

        transporter.sendMail(message, (error, info) => {
            if (error)
                console.log(error)
            res.send(info)
        });

    } catch (error) {
        console.log(error)
    }
}