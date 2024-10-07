import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { HttpModule } from '@nestjs/axios';
import { Payment, PaymentSchema } from 'src/schemas/payment.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		HttpModule.register({}),
		MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }])
	],
	controllers: [PaymentController],
	providers: [PaymentService]
})
export class PaymentModule {}
