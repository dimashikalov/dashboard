import { App } from './app';
import { LoggerService } from './logger/logger.service';

//Основная точка входа приложения
async function bootstrap() {
	const app = new App(new LoggerService)
	await app.init()
}

bootstrap()