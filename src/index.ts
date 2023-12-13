import "dotenv/config";
import { createTransport } from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";

const transporter = createTransport({
	host: "smtp.ethereal.email",
	port: 587,
	auth: {
		user: process.env.ADDRESS,
		pass: process.env.PASSWORD
	}
});

const mail: MailOptions = {
	from: process.env.ADDRESS,
	to: "hello@world.test",
	subject: "Hello,",
	text: "world!"
};

transporter.sendMail(mail);