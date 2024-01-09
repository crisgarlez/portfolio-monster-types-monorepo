import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TrpcModule } from './trpc/trpc.module';
import { MonsterTypesModule } from './monsters-type/monster-types.module';

@Module({
  imports: [ConfigModule.forRoot(), TrpcModule, MonsterTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
