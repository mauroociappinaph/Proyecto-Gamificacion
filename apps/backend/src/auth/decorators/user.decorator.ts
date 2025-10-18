// apps/backend/src/auth/decorators/user.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ClerkUser } from '@/common-types/interfaces/clerk-user.interface';

export const User = createParamDecorator(
  (data: keyof ClerkUser | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as ClerkUser;

    return data ? user?.[data] : user;
  },
);
