const nodemail = require('nodemailer');
const { EMAIL, PASSWORD } = require('./utility/config')

const transporter = nodemail.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
                user: EMAIL,
                pass: PASSWORD
        }
})

const sendMail = async (to, subject, text, html) => {
        const mailOption = {
                from: EMAIL,
                to: to,
                subject: subject,
                text: text,
                html: html
        }
        try {
                await transporter.sendMail(mailOption);
        }
        catch (error) {
                console.log(error);
        }
}
