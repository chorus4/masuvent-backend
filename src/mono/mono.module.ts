import { Module } from '@nestjs/common';
import { MonoService } from './mono.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({})
  ],
  providers: [MonoService]
})
export class MonoModule {}
