import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ClerkUser } from '@/common-types/interfaces/clerk-user.interface';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    const user: ClerkUser | undefined = request.user;

    const userId = user?.id || 'guest';
    const userEmail = user?.emailAddresses?.[0]?.emailAddress || 'anonymous';
    const userName = user?.firstName || 'name';

    // Añadir la información del usuario al request para que pino-pretty pueda acceder a ella
    request.userId = userId;
    request.userEmail = userEmail;
    request.userName = userName;

    return next.handle();
  }
}
