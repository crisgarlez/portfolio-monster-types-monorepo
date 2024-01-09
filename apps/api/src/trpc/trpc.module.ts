import { Module } from '@nestjs/common';
import { TrpcRouter } from './trpc.router';
import { TrpcService } from './trpc.service';
import { MonsterTypesModule } from 'src/monsters-type/monster-types.module';

@Module({
  imports: [MonsterTypesModule],
  providers: [TrpcService, TrpcRouter],
})
export class TrpcModule {}
