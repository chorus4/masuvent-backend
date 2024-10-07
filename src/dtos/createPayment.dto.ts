import { IsEmail, IsNotEmpty, IsPhoneNumber, ValidatorOptions } from 'class-validator'

export class CreatePaymentDto {
	@IsEmail()
	email: string

	telegram: string

	@IsNotEmpty()
	size: string

	@IsNotEmpty()
	country: string

	@IsNotEmpty()
	city: string

	@IsNotEmpty()
	department: string

	@IsPhoneNumber()
	phone: string

	instagram: string

	promo: string
}