import { Body, Controller, Post } from '@nestjs/common'
import { PaymentService } from './payment.service'

@Controller('payment')
export class PaymentController {
	constructor(private paymentService: PaymentService) {}

	@Post('/createPayment')
	createPayment(@Body() createPaymentDto) {
		return this.paymentService.createPayment(createPaymentDto)
	}

	@Post('/webhook')
	webhook(@Body() webhookDto) {
		this.paymentService.webhook(webhookDto)
	}
}
