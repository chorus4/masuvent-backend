import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { lastValueFrom } from 'rxjs'
import { CreatePaymentDto } from 'src/dtos/createPayment.dto'
import { Payment } from 'src/schemas/payment.schema'

@Injectable()
export class PaymentService {
	constructor(
		private readonly httpService: HttpService,
		@InjectModel(Payment.name) private paymentModel: Model<Payment>
	) {}

	async createPayment(createPaymentDto: CreatePaymentDto) {
		const { data } = await lastValueFrom(
			this.httpService.post(
				`${process.env.MONO_URL}/merchant/invoice/create`,
				{
					amount: 1000,
					redirectUrl: process.env.THANKS_URL,
					webHookUrl: process.env.API_URL
				},
				{ headers: { 'X-Token': process.env.MONO_API } }
			)
		)

		const payment = new this.paymentModel({
			...createPaymentDto,
			acquiringId: data.invoiceId
		})

		await payment.save()

		return {
			pageUrl: data.pageUrl
		}
	}

	async webhook(webhookDto) {
		const { invoiceId, status } = webhookDto
    if (status != 'success') return
    
    const payment = await this.paymentModel.findOne({ acquiringId: invoiceId })
    if (!payment) return
    
    payment.paymentStatus = 'success'

    await payment.save()

    console.log("Successfuly payed");
    
    // TODO: Add google sheets
	}
}
