const nodemailer = require("nodemailer");

async function sendMail(email, password) {
    const senderEmail = process.env['SENDER_EMAIL'];
    const senderPassword = process.env['SENDER_PASSWORD'];
    
    try {
        let transporter = nodemailer.createTransport({
            service: process.env['SMTP_SERVICE'],
            port: 587,
            auth: {
                user: senderEmail,
                pass: senderPassword,
            },
        });

        const emailInfo = await transporter.sendMail({
            from: senderEmail,
            to: email,
            subject: "Sua senha de acesso.",
            text: `A senha de acesso para o email ${email} é: ${password}`,
        });
        const responseStatusMsg = emailInfo.response.split(' ')[2];
        return responseStatusMsg === 'OK' ? true : false;
    } catch (error) {
        console.log(error)
        return false;
    }
}

module.exports = sendMail;