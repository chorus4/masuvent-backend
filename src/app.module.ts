import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MonoModule } from './mono/mono.module'
import { PaymentModule } from './payment/payment.module'
import { SheetModule } from './sheet/sheet.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRoot(process.env.MONGO_URL),
		PaymentModule,
		MonoModule,
		SheetModule
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
