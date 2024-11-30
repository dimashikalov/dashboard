import { Request, Response, NextFunction } from 'express';
import { IMiddleware } from './middlewares.interface';
import { JwtPayload, verify } from 'jsonwebtoken';

export interface ICustomJwtPayload extends JwtPayload {
	email?: string;
}

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}

	async execute(req: Request, res: Response, next: NextFunction): Promise<void> {
		if (req.headers.authorization) {
			try {
				const payload = (await verify(
					req.headers.authorization.split(' ')[1],
					this.secret,
				)) as ICustomJwtPayload;
				req.user = payload.email as string;
				next();
			} catch (error) {
				next();
			}
		}

		next();
	}
}
