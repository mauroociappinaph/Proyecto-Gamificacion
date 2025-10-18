import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport'; // Importar AuthGuard de @nestjs/passport
import { User } from './auth/decorators/user.decorator';
import { ClerkUser } from '@/common-types/interfaces/clerk-user.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('clerk')) // Usar AuthGuard directamente con la estrategia 'clerk'
  @Get()
  getHello(@User() user: ClerkUser): string {
    console.log('Authenticated user:', user);
    return `Hello ${user.firstName || user.emailAddresses[0].emailAddress}!`;
  }
}
