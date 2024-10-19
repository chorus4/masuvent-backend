import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { HttpModule } from '@nestjs/axios';
import { Payment, PaymentSchema } from 'src/schemas/payment.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [
		ConfigModule.forRoot(),
		HttpModule.register({}),
		MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }])
	],
	controllers: [PaymentController],
	providers: [PaymentService]
})
export class PaymentModule {}
