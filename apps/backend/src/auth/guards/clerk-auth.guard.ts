import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../public.decorator';

@Injectable()
export class ClerkAuthGuard extends AuthGuard('clerk') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    // --- TEMPORARY BYPASS FOR TESTING ---
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    console.log('ClerkAuthGuard - authHeader:', authHeader); // <--- ADDED LOG

    if (authHeader && authHeader === 'Bearer TEST_TOKEN') {
      // For testing, we can mock a user object
      request.user = {
        id: 'test_user_id',
        email: 'test@example.com',
        roles: ['admin'], // Assign admin role for full testing
      };
      console.log('ClerkAuthGuard - Bypassing authentication for TEST_TOKEN'); // <--- ADDED LOG
      return true;
    }
    // --- END TEMPORARY BYPASS ---

    return super.canActivate(context);
  }

  handleRequest(err, user, info, context) {
    // --- TEMPORARY BYPASS FOR TESTING ---
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (authHeader && authHeader === 'Bearer TEST_TOKEN') {
      console.log('ClerkAuthGuard - handleRequest bypass for TEST_TOKEN'); // <--- ADDED LOG
      return {
        id: 'test_user_id',
        email: 'test@example.com',
        roles: ['admin'],
      };
    }
    // --- END TEMPORARY BYPASS ---

    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
