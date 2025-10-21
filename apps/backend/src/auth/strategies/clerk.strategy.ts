import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { createClerkClient } from '@clerk/backend';
import { ClerkUser } from '@/common-types/interfaces/clerk-user.interface';
import { passportJwtSecret } from 'jwks-rsa';

@Injectable()
export class ClerkStrategy extends PassportStrategy(Strategy, 'clerk') {
  private clerkClient: ReturnType<typeof createClerkClient>;

  constructor(private configService: ConfigService) {
    const jwksUri = configService.get<string>('CLERK_JWT_KEY');
    if (!jwksUri) {
      throw new Error(
        'CLERK_JWT_KEY (JWKS URI) is not defined in environment variables.',
      );
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: jwksUri,
      }),
    });

    this.clerkClient = createClerkClient({
      secretKey: this.configService.get<string>('CLERK_SECRET_KEY'),
    });
  }

  async validate(payload: { sub: string }): Promise<ClerkUser> {
    if (!payload.sub) {
      throw new UnauthorizedException('Invalid token payload: no subject.');
    }

    let user;
    try {
      user = await this.clerkClient.users.getUser(payload.sub);
    } catch (error) {
      console.error('Clerk API error during user fetch:', error);
      throw new UnauthorizedException('Failed to validate user with Clerk.');
    }

    if (!user) {
      throw new UnauthorizedException('User not found.');
    }

    const clerkUser: ClerkUser = {
      id: user.id,
      emailAddresses: user.emailAddresses.map((ea) => ({
        id: ea.id,
        emailAddress: ea.emailAddress,
      })),
      firstName: user.firstName,
      lastName: user.lastName,
      imageUrl: user.imageUrl,
    };

    return clerkUser;
  }
}
