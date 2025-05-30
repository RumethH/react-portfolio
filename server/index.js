const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json({limit: "25mb"}));
app.use(express. urlencoded({limit: "25mb"}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

function sendEmail({sender, email, subject, message}){
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail", 
            auth: {
                user: "rh3rath100@gmail.com",
                pass: "tvjj mgqw hggd uawy"

            }
        });

        const mail_configs = {
            from: "example@gmail.com",
            sender,
            to: email,
            subject,
            html: `
            <p>Hi, Rumeth</p>
            <p>${message}</p>
            <p> Kind Regards,</p>
            <p>${sender}</p>
            `,
        };

        transporter.sendMail(mail_configs, function (error, info) {
            if(error){
                console.log(error);
                return reject({message: 'An error occurred'})
            }
            
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
    console.log(`nodemailer is listening at https://react-portfolio-server-zeta.vercel.app`)
});
