import { Module } from '@nestjs/common';
import { MonsterTypesService } from './monster-types.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [MonsterTypesService],
  controllers: [],
  exports: [MonsterTypesService],
})
export class MonsterTypesModule {}
