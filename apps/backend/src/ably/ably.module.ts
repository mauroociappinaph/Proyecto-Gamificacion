import { Module } from '@nestjs/common';
import { AblyService } from './ably.service';
import { AblyController } from './ably.controller';

@Module({
  imports: [],
  controllers: [AblyController],
  providers: [AblyService],
  exports: [AblyService],
})
export class AblyModule {}
