import { Module } from '@nestjs/common';
import { ClerkController } from './clerk/clerk.controller';

@Module({
  controllers: [ClerkController],
})
export class WebhooksModule {}
