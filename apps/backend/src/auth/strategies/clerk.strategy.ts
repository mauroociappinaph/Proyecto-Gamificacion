// apps/backend/src/auth/strategies/clerk.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ClerkUser } from '@/common-types/interfaces/clerk-user.interface';
import { Request } from 'express';

@Injectable()
export class ClerkStrategy extends PassportStrategy(Strategy, 'clerk') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // Ignorar expiración para token simulado
      secretOrKey: 'clerk-secret', // Placeholder, la verificación real la hace Clerk
      passReqToCallback: true, // Pasar el request a la función validate
    });
  }

  async validate(req: Request, payload: any): Promise<ClerkUser> {
    const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    if (!token) {
      throw new UnauthorizedException('Token not found in request');
    }
    // The payload is the decoded JWT. We trust Clerk to have verified it.
    // We just need to return it to be attached to the request object.
    return payload;
  }
}
