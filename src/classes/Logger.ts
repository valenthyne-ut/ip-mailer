import { appendFileSync, writeFileSync } from "fs";
import { join } from "path";

export class Logger {
	static logPath = join(process.cwd(), "log");

	constructor() {
		const curDate = new Date().toISOString();
		writeFileSync(Logger.logPath, `Log creation timestamp:\n${curDate}\n\n`, {encoding: "utf-8"});
	}

	write(message: string) {
		appendFileSync(Logger.logPath, message, {encoding: "utf-8"});
	}
}