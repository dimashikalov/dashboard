import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'Неверно указан email' })
	email: string;

	@IsString({ message: 'Неверный пароль' })
	password: string;
}
