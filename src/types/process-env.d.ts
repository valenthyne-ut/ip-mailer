export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			[key: string]: string | undefined;
			ADDRESS: string | undefined;
			PASSWORD: string | undefined;
		}
	}
}