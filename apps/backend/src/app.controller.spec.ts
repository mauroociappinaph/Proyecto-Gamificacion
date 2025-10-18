import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClerkUser } from '@/common-types/interfaces/clerk-user.interface';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return a personalized greeting', () => {
      const mockUser: ClerkUser = {
        id: 'user_123',
        emailAddresses: [{ id: 'email_123', emailAddress: 'test@example.com' }],
        firstName: 'Test',
        lastName: 'User',
        imageUrl: 'http://example.com/image.png',
      };
      expect(appController.getHello(mockUser)).toBe('Hello Test!');
    });
  });
});
