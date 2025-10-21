import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as Ably from 'ably';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AblyService implements OnModuleInit, OnModuleDestroy {
  private ably: Ably.Realtime;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    const ablyApiKey = this.configService.get<string>('ABLY_API_KEY');
    if (!ablyApiKey) {
      throw new Error('ABLY_API_KEY is not defined in environment variables');
    }
    this.ably = new Ably.Realtime(ablyApiKey);

    this.ably.connection.on((stateChange: Ably.ConnectionStateChange) => {
      console.log('Ably Connection State: ' + stateChange.current);
      if (stateChange.current === 'failed') {
        console.error('Ably Connection Failed:', stateChange.reason);
      }
    });
  }

  getChannel(channelName: string): Ably.RealtimeChannel {
    return this.ably.channels.get(channelName);
  }

  onModuleDestroy() {
    this.ably.close();
  }
}
