import { Body, Controller, Post } from '@nestjs/common'
import { PaymentService } from './payment.service'
import { CreatePaymentDto } from 'src/dtos/createPayment.dto'

@Controller('payment')
export class PaymentController {
	constructor(private paymentService: PaymentService) {}

	@Post('/createPayment')
	createPayment(@Body() createPaymentDto: CreatePaymentDto) {
		return this.paymentService.createPayment(createPaymentDto)
	}

	@Post('/webhook')
	webhook(@Body() webhookDto) {
		this.paymentService.webhook(webhookDto)
	}

	@Post('/bc')
	bc(@Body() dto) {
		this.paymentService.bc(dto)
	}
}
