import { Test, TestingModule } from '@nestjs/testing';
import { RewardsService } from './rewards.service';
import { getModelToken } from '@nestjs/mongoose';
import { UserTask } from './schemas/user-task.schema';
import { Task } from '../tasks/schemas/task.schema';
import { Model } from 'mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotFoundException } from '@nestjs/common';
import { Schema as MongooseSchema } from 'mongoose'; // Import MongooseSchema

const mockTask = {
  gameId: 'someGameId',
  title: 'Test Task',
  description: 'Test Description',
  requirements: {},
  rewards: {
    points: 10,
    coins: 5,
  },
  isActive: true,
};

const mockUserTask = {
  userId: 'someUserId',
  taskId: 'someTaskId',
  status: 'completed',
  completedAt: new Date(),
  evidence: {},
  reward: undefined,
  save: jest.fn().mockImplementation(function () {
    this.reward = mockTask.rewards; // Update reward on save
    return Promise.resolve(this);
  }),
};

describe('RewardsService', () => {
  let service: RewardsService;
  let userTaskModel: Model<UserTask>;
  let taskModel: Model<Task>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RewardsService,
        {
          provide: getModelToken(UserTask.name),
          useValue: {
            find: jest.fn(),
            findById: jest.fn(),
            exec: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: getModelToken(Task.name),
          useValue: {
            findById: jest.fn(),
            exec: jest.fn(),
          },
        },
        {
          provide: EventEmitter2,
          useValue: {
            emit: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<RewardsService>(RewardsService);
    userTaskModel = module.get<Model<UserTask>>(getModelToken(UserTask.name));
    taskModel = module.get<Model<Task>>(getModelToken(Task.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find user rewards', async () => {
    jest.spyOn(userTaskModel, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce([mockUserTask]),
    } as any);
    const rewards = await service.findUserRewards('someUserId');
    expect(rewards).toEqual([mockUserTask]);
  });

  it('should claim a reward', async () => {
    jest.spyOn(userTaskModel, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockUserTask),
    } as any);
    jest.spyOn(taskModel, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockTask),
    } as any);

    const claimedReward = await service.claimReward({
      userTaskId: 'someUserTaskId' as unknown as MongooseSchema.Types.ObjectId,
    }); // Cast to ObjectId
    expect(claimedReward.reward).toEqual(mockTask.rewards);
    expect(mockUserTask.save).toHaveBeenCalled();
  });

  it('should throw NotFoundException if user task not found on claim', async () => {
    jest.spyOn(userTaskModel, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(null),
    } as any);
    await expect(
      service.claimReward({
        userTaskId:
          'someUserTaskId' as unknown as MongooseSchema.Types.ObjectId,
      }),
    ).rejects.toThrow(NotFoundException);
  });

  it('should throw error if user task status is not completed', async () => {
    const incompleteUserTask = { ...mockUserTask, status: 'pending' };
    jest.spyOn(userTaskModel, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(incompleteUserTask),
    } as any);
    await expect(
      service.claimReward({
        userTaskId:
          'someUserTaskId' as unknown as MongooseSchema.Types.ObjectId,
      }),
    ).rejects.toThrow('Reward cannot be claimed.');
  });

  it('should throw error if reward is already claimed', async () => {
    const claimedUserTask = {
      ...mockUserTask,
      reward: { points: 10, coins: 5 },
    };
    jest.spyOn(userTaskModel, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(claimedUserTask),
    } as any);
    await expect(
      service.claimReward({
        userTaskId:
          'someUserTaskId' as unknown as MongooseSchema.Types.ObjectId,
      }),
    ).rejects.toThrow('Reward cannot be claimed.');
  });

  it('should throw NotFoundException if task not found when claiming reward', async () => {
    jest.spyOn(userTaskModel, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockUserTask),
    } as any);
    jest.spyOn(taskModel, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(null),
    } as any);
    await expect(
      service.claimReward({
        userTaskId:
          'someUserTaskId' as unknown as MongooseSchema.Types.ObjectId,
      }),
    ).rejects.toThrow(NotFoundException);
  });
});
