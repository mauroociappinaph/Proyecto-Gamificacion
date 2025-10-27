import { Test, TestingModule } from '@nestjs/testing';
import { WalletService } from './wallet.service';
import { getModelToken } from '@nestjs/mongoose';
import { Wallet } from './schemas/wallet.schema';
import { Transaction } from './schemas/transaction.schema';

describe('WalletService', () => {
  let service: WalletService;

  const mockWallet = {
    userId: 'someUserId',
    balance: 0,
    currency: 'USD',
    transactions: [],
  };

  const mockTransaction = {
    walletId: 'someWalletId',
    type: 'deposit',
    amount: 100,
    currency: 'USD',
    description: 'test transaction',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WalletService,
        {
          provide: getModelToken(Wallet.name),
          useValue: {
            new: jest.fn().mockResolvedValue(mockWallet),
            constructor: jest.fn().mockResolvedValue(mockWallet),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
            exec: jest.fn().mockResolvedValue(mockWallet),
            findById: jest.fn().mockResolvedValue(mockWallet),
            findByIdAndUpdate: jest.fn().mockResolvedValue(mockWallet),
            findByIdAndDelete: jest.fn().mockResolvedValue(mockWallet),
          },
        },
        {
          provide: getModelToken(Transaction.name),
          useValue: {
            new: jest.fn().mockResolvedValue(mockTransaction),
            constructor: jest.fn().mockResolvedValue(mockTransaction),
            create: jest.fn().mockResolvedValue(mockTransaction),
          },
        },
      ],
    }).compile();

    service = module.get<WalletService>(WalletService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
