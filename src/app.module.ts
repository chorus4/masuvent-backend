import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PaymentModule } from './payment/payment.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRoot(process.env.MONGO_URL),
		PaymentModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
