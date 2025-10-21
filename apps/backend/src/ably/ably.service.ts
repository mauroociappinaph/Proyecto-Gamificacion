import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import * as Ably from 'ably';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AblyService implements OnModuleInit, OnModuleDestroy {
  private ably: Ably.Rest; // Cambiado a Ably.Rest

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    const ablyApiKey = this.configService.get<string>('ABLY_API_KEY');
    if (!ablyApiKey) {
      throw new Error('ABLY_API_KEY is not defined in environment variables');
    }
    this.ably = new Ably.Rest(ablyApiKey); // Cambiado a Ably.Rest

    // No es necesario un listener de conexión para Ably.Rest
    // this.ably.connection.on((stateChange: Ably.ConnectionStateChange) => {
    //   console.log('Ably Connection State: ' + stateChange.current);
    //   if (stateChange.current === 'failed') {
    //     console.error('Ably Connection Failed:', stateChange.reason);
    //   }
    // });
  }

  // Nuevo método para crear TokenRequest
  async createTokenRequest(
    clientId: string,
    capabilities: any,
  ): Promise<Ably.TokenRequest> {
    return this.ably.auth.createTokenRequest({
      clientId,
      capability: JSON.stringify(capabilities),
    });
  }

  // El método getChannel ya no es relevante para Ably.Rest en este contexto
  // getChannel(channelName: string): Ably.RealtimeChannel {
  //   return this.ably.channels.get(channelName);
  // }

  onModuleDestroy() {
    // No es necesario cerrar la conexión para Ably.Rest de esta manera
    // this.ably.close();
  }
}
