import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AblyService } from './ably.service';
import { ClerkAuthGuard } from '../auth/guards/clerk-auth.guard';
import { User } from '../auth/decorators/user.decorator';
import { ClerkUser } from '@/common-types/interfaces/clerk-user.interface';
import * as Ably from 'ably';

@Controller('ably')
export class AblyController {
  constructor(private readonly ablyService: AblyService) {}

  @UseGuards(ClerkAuthGuard)
  @Get('token')
  async createTokenRequest(
    @User() user: ClerkUser,
  ): Promise<Ably.TokenRequest> {
    // Aquí puedes definir las capabilities del token de Ably basadas en el rol del usuario o en la lógica de negocio
    const clientId = user.id; // Usar el ID de Clerk como clientId de Ably
    const capabilities = {
      'channel:*': ['subscribe', 'publish', 'history', 'presence'], // Ejemplo: acceso completo a todos los canales
    };

    return this.ablyService.createTokenRequest(clientId, capabilities);
  }
}
