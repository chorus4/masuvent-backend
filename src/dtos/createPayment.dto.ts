import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator'

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
	country: string

	@IsNotEmpty()
	deliveryType: string

	@IsNotEmpty()
	feedback: string

	@IsNotEmpty()
	@IsPhoneNumber()
	phone: string

	@IsNotEmpty()
	paymentType: string

	@IsNotEmpty()
	products: []

	token: string
}
