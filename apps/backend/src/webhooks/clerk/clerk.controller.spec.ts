import { Test, TestingModule } from '@nestjs/testing';
import { ClerkController } from './clerk.controller';
import { ConfigService } from '@nestjs/config';

describe('ClerkController', () => {
  let controller: ClerkController;

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      controllers: [ClerkController],
      providers: [
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'CLERK_WEBHOOK_SECRET') {
                return 'test_secret'; // Proporcionar un mock secret para la prueba
              }
              return null;
            }),
          },
        },
      ],
    }).compile();

    controller = testModule.get<ClerkController>(ClerkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
