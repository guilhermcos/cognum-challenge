import { Module } from '@nestjs/common';
import { RandomUserApiService } from './random-user-api.service';

@Module({
  providers: [RandomUserApiService],
  exports: [RandomUserApiService],
})
export class RandomUserApiModule {}
