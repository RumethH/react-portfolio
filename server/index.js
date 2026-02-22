const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json({limit: "25mb"}));
app.use(express. urlencoded({limit: "25mb"}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

function sendEmail({sender, email, subject, message}){
    return new Promise((resolve, reject) => {
        const gmailUser = process.env.GMAIL_USER || "rh3rath100@gmail.com";
        const gmailAppPassword = process.env.GMAIL_APP_PASSWORD || "";
        if (!gmailAppPassword) {
            return reject({ message: "Server: GMAIL_APP_PASSWORD not set" });
        }
        // Explicit SMTP settings to avoid timeouts and make debugging easier.
        // If Gmail blocks connections from the platform, consider using a relay
        // (SendGrid/Mailgun/Postmark) with an API key which is more reliable.
        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // use TLS
            auth: {
                user: gmailUser,
                pass: gmailAppPassword
            },
            // timeouts (ms)
            connectionTimeout: 10000,
            greetingTimeout: 10000,
            socketTimeout: 10000,
        });

        // Send to your configured Gmail address and set reply-to to the visitor.
        const mail_configs = {
            from: gmailUser,
            to: gmailUser,
            replyTo: email,
            subject,
            html: `
            <p>Hi, Rumeth</p>
            <p>${message}</p>
            <p> Kind Regards,</p>
            <p>${sender}</p>
            `,
        };

        console.log(`Attempting SMTP send to ${mail_configs.to} via smtp.gmail.com:465`);
        transporter.sendMail(mail_configs, function (error, info) {
            if(error){
                console.error('Email send error:', {
                    message: error.message,
                    code: error.code,
                    stack: error.stack
                });
                return reject({message: 'An error occurred', details: error.message})
            }

            console.log('Email sent:', info && info.response);
            return resolve({message: 'Email sent successfully'});
        });

    });
}

app.get('/', (req, res) => {
  res.send('Hello from root!');
});

app.post("/send", (req, res) => {
    sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message || "Internal Server Error"))
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
