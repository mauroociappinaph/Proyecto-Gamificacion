import {
  Controller,
  Post,
  RawBodyRequest,
  Req,
  Headers,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Request } from 'express';
import { Webhook } from 'svix';
import { ConfigService } from '@nestjs/config';
import { Public } from '../../auth/public.decorator';

@Controller('webhooks/clerk')
export class ClerkController {
  constructor(private configService: ConfigService) {}

  @Public()
  @Post()
  async handleWebhook(
    @Req() request: RawBodyRequest<Request>,
    @Headers() headers: Record<string, string>,
  ) {
    const secret = this.configService.get<string>('CLERK_WEBHOOK_SECRET');

    if (!secret) {
      throw new HttpException(
        'Webhook secret not configured.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const svix_id = headers['svix-id'];
    const svix_timestamp = headers['svix-timestamp'];
    const svix_signature = headers['svix-signature'];

    if (!svix_id || !svix_timestamp || !svix_signature) {
      throw new HttpException('Missing Svix headers', HttpStatus.BAD_REQUEST);
    }

    if (!request.rawBody) {
      throw new HttpException('Raw body not found', HttpStatus.BAD_REQUEST);
    }

    const payload = request.rawBody.toString('utf8');
    const wh = new Webhook(secret);

    let msg: any;
    try {
      msg = wh.verify(payload, headers);
    } catch (err) {
      console.error('Error verifying webhook:', err);
      throw new HttpException(
        'Webhook verification failed',
        HttpStatus.BAD_REQUEST,
      );
    }

    // Aquí puedes procesar el evento del webhook.
    // Por ejemplo, si es un evento de usuario creado:
    if (msg.type === 'user.created') {
      console.log('Nuevo usuario creado:', msg.data);
      // Lógica para guardar el usuario en tu base de datos, etc.
    } else if (msg.type === 'user.updated') {
      console.log('Usuario actualizado:', msg.data);
      // Lógica para actualizar el usuario en tu base de datos, etc.
    } else if (msg.type === 'user.deleted') {
      console.log('Usuario eliminado:', msg.data);
      // Lógica para eliminar el usuario de tu base de datos, etc.
    }

    return { success: true, message: 'Webhook processed' };
  }
}
