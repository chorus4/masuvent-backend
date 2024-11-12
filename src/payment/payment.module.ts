import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { MongooseModule } from '@nestjs/mongoose'
import { MonoService } from 'src/mono/mono.service'
import { Payment, PaymentSchema } from 'src/schemas/payment.schema'
import { PaymentController } from './payment.controller'
import { PaymentService } from './payment.service'

const jwt_secret = 'secret'

@Module({
	imports: [
		ConfigModule.forRoot(),
		HttpModule.register({}),
		MongooseModule.forFeature([{ name: Payment.name, schema: PaymentSchema }]),
		JwtModule.register({
			global: true,
			secret: jwt_secret
		})
	],
	controllers: [PaymentController],
	providers: [MonoService, PaymentService]
})
export class PaymentModule {}
