import { Test, TestingModule } from '@nestjs/testing';
import { RewardsController } from './rewards.controller';
import { RewardsService } from './rewards.service';
import { ClaimRewardDto } from './dto/claim-reward.dto';
import { Schema as MongooseSchema } from 'mongoose'; // Import MongooseSchema

const mockRewardsService = {
  findUserRewards: jest.fn(),
  claimReward: jest.fn(),
};

describe('RewardsController', () => {
  let controller: RewardsController;
  let service: RewardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RewardsController],
      providers: [
        {
          provide: RewardsService,
          useValue: mockRewardsService,
        },
      ],
    }).compile();

    controller = module.get<RewardsController>(RewardsController);
    service = module.get<RewardsService>(RewardsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call findUserRewards from service', async () => {
    const userId = 'testUserId';
    mockRewardsService.findUserRewards.mockResolvedValueOnce([]);
    expect(await controller.findUserRewards(userId)).toEqual([]);
    expect(service.findUserRewards).toHaveBeenCalledWith(userId);
  });

  it('should call claimReward from service', async () => {
    const claimRewardDto: ClaimRewardDto = {
      userTaskId: 'testUserTaskId' as unknown as MongooseSchema.Types.ObjectId,
    }; // Cast to ObjectId
    mockRewardsService.claimReward.mockResolvedValueOnce({});
    expect(await controller.claimReward(claimRewardDto)).toEqual({});
    expect(service.claimReward).toHaveBeenCalledWith(claimRewardDto);
  });
});
