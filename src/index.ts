import "dotenv/config";
import { Logger } from "./classes/Logger";
import { createTransport } from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";

(async () => {
	const logger = new Logger();

	if(process.env.ADDRESS == undefined || process.env.PASSWORD == undefined) {
		logger.write("Error: ADDRESS or PASSWORD not defined in .env file.");
		process.exit(1);
	}
	
	await fetch("http://icanhazip.com")
		.then(async response => {
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
				to: process.env.ADDRESS,
				subject: `IP @ ${new Date().toISOString()}`,
				text: await response.text()
			};

			transporter.sendMail(mail)
				.catch(error => {
					if(typeof error === "string") {
						logger.write(error);
					} else if(error instanceof Error) {
						logger.write(error.message);
					}
				});
		})
		.catch(error => {
			if(typeof error === "string") {
				logger.write(error);
			} else if(error instanceof Error) {
				logger.write(error.message);
			}
		});
})();