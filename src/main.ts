import { App } from './app';

//Основная точка входа приложения
async function bootstrap() {
	const app = new App()
	await app.init()
}

bootstrap()