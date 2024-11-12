import { Body, Controller, Post } from '@nestjs/common'
import { CreatePaymentDto } from 'src/dtos/createPayment.dto'
import { PaymentService } from './payment.service'

@Controller('payment')
export class PaymentController {
	constructor(private paymentService: PaymentService) {}

	@Post('/createPayment')
	createPayment(@Body() createPaymentDto: CreatePaymentDto) {
		return this.paymentService.createPayment(createPaymentDto)
	}

	@Post('/webhook')
	webhook(@Body() webhookDto) {
		return this.paymentService.webhook(webhookDto)
	}
}
