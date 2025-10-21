import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ClerkStrategy } from './strategies/clerk.strategy';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';

@Module({
  imports: [ConfigModule, PassportModule],
  providers: [AuthService, ClerkStrategy],
  exports: [AuthService, PassportModule],
})
export class AuthModule {}
