import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator'

export class CreatePaymentDto {
	@IsEmail()
	email: string

	@IsNotEmpty()
	fio: string

	@IsNotEmpty()
	address: string

	@IsNotEmpty()
	city: string

	@IsNotEmpty()
	feedback: string

	@IsNotEmpty()
	@IsNumber()
	phone: string

	@IsNotEmpty()
	country: string

	@IsNotEmpty()
	size: string

	@IsNotEmpty()
	paymentType: string
}
