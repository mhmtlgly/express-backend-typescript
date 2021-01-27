"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contact = void 0;
const nodemailer_1 = require("nodemailer");
const contact = (req, res) => {
    try {
        const { email, subject, name, message } = req.body;
        const transporter = nodemailer_1.createTransport({
            service: process.env.EMAIL_PROVIDER,
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_ADDRESS,
            subject: subject,
            html: `
    <p style="color:blue;font-size:46px;" >hey my name is: ${name}.
    </p> <p>The text is: ${message}.
    </p> <p>I want to speak to the Department.</p>
    `,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(`custom gmail errör: ${error}`);
            }
            else {
                console.log({ email, subject, name, message, info });
            }
        });
        res.status(200).json({ email, subject, name, message });
    }
    catch (error) {
        console.log(error);
    }
};
exports.contact = contact;
//# sourceMappingURL=index.js.map