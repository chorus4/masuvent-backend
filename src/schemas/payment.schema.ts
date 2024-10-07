import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema()
export class Payment {
	@Prop({ required: true })
	email: string

	telegram: string

	@Prop({ required: true, enum: ['BABY', 'BIG'] })
	size: string

	@Prop({ required: true })
	country: string

	@Prop({ required: true })
	city: string

	@Prop({ required: true })
	department: string

	@Prop({ required: true })
	phone: string

	instagram: string

	promo: string

	@Prop({ required: true })
	acquiringId: string

	@Prop({ default: 'pending', enum: ['pending', 'success', 'canceled'] })
	paymentStatus: string
}

export const PaymentSchema = SchemaFactory.createForClass(Payment)