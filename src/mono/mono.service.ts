import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { lastValueFrom } from 'rxjs'

@Injectable()
export class MonoService {
	constructor(private readonly httpService: HttpService) {}

	async createInvoice(amount) {
		const { data } = await lastValueFrom(
			this.httpService.post(
				`${process.env.MONO_URL}/merchant/invoice/create`,
				{
					amount,
					redirectUrl: process.env.THANKS_URL,
					webHookUrl: process.env.API_URL
				},
				{ headers: { 'X-Token': process.env.MONO_API } }
			)
		)

		// console.log(data)

		return data
	}
}
