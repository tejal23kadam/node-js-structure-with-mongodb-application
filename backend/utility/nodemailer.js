const nodemail = require('nodemailer');
const { EMAIL, PASSWORD } = require('./config');

const transporter = nodemail.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
                user: EMAIL,
                pass: PASSWORD
        }, tls: {
                rejectUnauthorized: false, // <-- Allow self-signed certs
        }
})

const sendmail = async (to, subject, text, html) => {
        const mailOption = {
                from: EMAIL,
                to: to,
                subject: subject,
                text: text,
                html: html
        }
        try {
                await transporter.sendMail(mailOption)
        }
        catch (error) {
                console.log(error);
        }
}

module.exports = { sendmail }