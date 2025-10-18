import { ClerkUser } from '@app/common-types/interfaces/clerk-user.interface';

declare global {
  namespace Express {
    interface Request {
      user?: ClerkUser;
      auth?: ClerkUser; // Opcional, si quieres mantener 'auth' para compatibilidad
    }
  }
}
