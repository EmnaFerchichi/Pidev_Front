require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'emna.ferchichi@esprit.tn', 
        pass: process.env.PASSWORD || '203JFT1012'
    }
});
let mailOptions = {
    from: 'emna.ferchichi@esprit.tn', 
    to: 'emna.ferchichi@esprit.tn',
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!',
    attachments: [
        { filename: 'about_1.JPG', path: 'src/assets/images/about_1.JPG' }
    ]
};
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});
