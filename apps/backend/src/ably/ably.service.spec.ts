import { Test, TestingModule } from '@nestjs/testing';
import { AblyService } from './ably.service';
import { ConfigService } from '@nestjs/config';
import * as Ably from 'ably';

// Mock del cliente de Ably
const mockAblyClient = {
  auth: {
    createTokenRequest: jest.fn(),
  },
};

// Mock de ConfigService
const mockConfigService = {
  get: jest.fn((key: string) => {
    if (key === 'ABLY_API_KEY') {
      return 'test-key'; // Proporcionar una clave de prueba
    }
    return null;
  }),
};

// Mockear el constructor de Ably.Rest
jest.mock('ably', () => ({
  Rest: jest.fn(() => mockAblyClient),
}));

describe('AblyService', () => {
  let service: AblyService;

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      providers: [
        AblyService,
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile();

    service = testModule.get<AblyService>(AblyService);
    service.onModuleInit(); // Llamar manualmente para inicializar Ably en el entorno de prueba
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('onModuleInit', () => {
    it('should initialize Ably.Rest with API key', () => {
      expect(mockConfigService.get).toHaveBeenCalledWith('ABLY_API_KEY');
      expect(Ably.Rest).toHaveBeenCalledWith('test-key');
    });

    it('should throw an error if ABLY_API_KEY is not defined', () => {
      mockConfigService.get.mockReturnValueOnce(null);
      expect(() => service.onModuleInit()).toThrow(
        'ABLY_API_KEY is not defined in environment variables',
      );
    });
  });

  describe('createTokenRequest', () => {
    it('should call Ably auth.createTokenRequest with correct parameters', async () => {
      const clientId = 'test-client-id';
      const capabilities = { 'channel:*': ['subscribe'] };
      const expectedTokenRequest = { id: 'test-token-request' };

      mockAblyClient.auth.createTokenRequest.mockResolvedValue(
        expectedTokenRequest as any,
      );

      const result = await service.createTokenRequest(clientId, capabilities);

      expect(mockAblyClient.auth.createTokenRequest).toHaveBeenCalledWith({
        clientId: clientId,
        capability: JSON.stringify(capabilities),
      });
      expect(result).toEqual(expectedTokenRequest);
    });
  });
});
