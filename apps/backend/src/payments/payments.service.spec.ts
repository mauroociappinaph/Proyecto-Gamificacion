import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsService } from './payments.service';
import { getModelToken } from '@nestjs/mongoose';
import { Payment } from './schemas/payment.schema';

describe('PaymentsService', () => {
  let service: PaymentsService;

  const mockPayment = {
    userId: 'someUserId',
    amount: 100,
    currency: 'USD',
    type: 'deposit',
    status: 'pending',
    transactionId: 'someTransactionId',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PaymentsService,
        {
          provide: getModelToken(Payment.name),
          useValue: {
            new: jest.fn().mockResolvedValue(mockPayment),
            constructor: jest.fn().mockResolvedValue(mockPayment),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            create: jest.fn(),
            remove: jest.fn(),
            exec: jest.fn().mockResolvedValue(mockPayment),
          },
        },
      ],
    }).compile();

    service = module.get<PaymentsService>(PaymentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
