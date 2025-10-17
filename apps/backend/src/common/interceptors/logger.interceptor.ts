import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    // TODO: Obtener la información real del usuario autenticado (ID, rol)
    // Esto se implementará cuando se integre Clerk.
    const userId = 'guest'; // Placeholder
    const userRole = 'anonymous'; // Placeholder

    // Añadir la información del usuario al request para que pino-pretty pueda acceder a ella
    request.userId = userId;
    request.userRole = userRole;

    return next.handle();
  }
}
