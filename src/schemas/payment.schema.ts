import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type PaymentDocument = HydratedDocument<Payment>

@Schema()
export class Payment {
	@Prop({ required: true })
	email: string

	@Prop({ required: true })
	fio: string

	@Prop({ required: true })
	address: string

	@Prop({ required: true })
	city: string

	@Prop({ required: true })
	country: string

	@Prop({ required: true })
	feedback: string

	@Prop({ required: true })
	phone: string

	@Prop({ required: true })
	paymentType: string

	@Prop({ required: true })
	acquiringId: string

	@Prop({ default: 'pending', enum: ['pending', 'success', 'canceled'] })
	paymentStatus: string

	@Prop({ required: true })
	price: number

	@Prop()
	products: Array<Object>
}

export const PaymentSchema = SchemaFactory.createForClass(Payment)
