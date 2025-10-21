import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { UnauthorizedException } from '@nestjs/common';
import { ClerkStrategy } from './clerk.strategy';
import { ClerkUser } from '@/common-types/interfaces/clerk-user.interface';

// Mock del cliente de Clerk y sus métodos
const mockClerkClient = {
  users: {
    getUser: jest.fn(),
  },
};

// Mock de la función que crea el cliente
jest.mock('@clerk/backend', () => ({
  createClerkClient: () => mockClerkClient,
}));

describe('ClerkStrategy', () => {
  let strategy: ClerkStrategy;

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      providers: [
        ClerkStrategy,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'CLERK_JWT_KEY') return 'mock-jwks-uri';
              if (key === 'CLERK_SECRET_KEY') return 'mock-secret-key';
              return null;
            }),
          },
        },
      ],
    }).compile();

    strategy = testModule.get<ClerkStrategy>(ClerkStrategy);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(strategy).toBeDefined();
  });

  describe('validate', () => {
    it('should return a formatted user object on successful validation', async () => {
      const mockPayload = { sub: 'user_12345' };
      const mockClerkUser = {
        id: 'user_12345',
        firstName: 'Test',
        lastName: 'User',
        imageUrl: 'http://example.com/avatar.png',
        emailAddresses: [
          {
            id: 'email_id_1',
            emailAddress: 'test@example.com',
          },
        ],
      };

      mockClerkClient.users.getUser.mockResolvedValue(mockClerkUser);

      const result = await strategy.validate(mockPayload);

      const expectedUser: ClerkUser = {
        id: 'user_12345',
        firstName: 'Test',
        lastName: 'User',
        imageUrl: 'http://example.com/avatar.png',
        emailAddresses: [
          {
            id: 'email_id_1',
            emailAddress: 'test@example.com',
          },
        ],
      };

      expect(mockClerkClient.users.getUser).toHaveBeenCalledWith('user_12345');
      expect(result).toEqual(expectedUser);
    });

    it('should throw UnauthorizedException if user is not found', async () => {
      const mockPayload = { sub: 'user_not_found' };
      mockClerkClient.users.getUser.mockResolvedValue(null);

      await expect(strategy.validate(mockPayload)).rejects.toThrow(
        UnauthorizedException,
      );
      await expect(strategy.validate(mockPayload)).rejects.toThrow(
        'User not found.',
      );
    });

    it('should throw UnauthorizedException if clerkClient throws an error', async () => {
      const mockPayload = { sub: 'user_error' };
      mockClerkClient.users.getUser.mockRejectedValue(
        new Error('Clerk API Error'),
      );

      await expect(strategy.validate(mockPayload)).rejects.toThrow(
        UnauthorizedException,
      );
      await expect(strategy.validate(mockPayload)).rejects.toThrow(
        'Failed to validate user with Clerk.',
      );
    });

    it('should throw UnauthorizedException if payload has no sub', async () => {
      const mockPayload = {}; // Payload sin `sub`
      await expect(strategy.validate(mockPayload as any)).rejects.toThrow(
        UnauthorizedException,
      );
      await expect(strategy.validate(mockPayload as any)).rejects.toThrow(
        'Invalid token payload: no subject.',
      );
    });
  });
});
