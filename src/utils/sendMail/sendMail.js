const nodemailer = require("nodemailer");

async function sendMail(email, password) {
    const senderEmail = process.env['SENDER_EMAIL'];
    const senderPassword = process.env['SENDER_PASSWORD'];

    let transporter = nodemailer.createTransport({
        service: process.env['SMTP_SERVICE'],
        port: 587,
        auth: {
            user: senderEmail,
            pass: senderPassword,
        },
    });

    await transporter.sendMail({
        from: senderEmail,
        to: email,
        subject: "Sua senha de acesso.",
        text: `A senha de acesso para o email ${email} é: ${password}`,
    });
}

module.exports = sendMail;