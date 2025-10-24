import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { getModelToken } from '@nestjs/mongoose';
import { Task } from './schemas/task.schema';
import { UserTask } from '../rewards/schemas/user-task.schema';
import { Model } from 'mongoose';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotFoundException } from '@nestjs/common';

const mockTask: any = {
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
mockTask.save = jest.fn().mockResolvedValue(mockTask);

const mockUserTask: any = {
  userId: 'someUserId',
  taskId: 'someTaskId',
  status: 'pending',
  completedAt: undefined,
  evidence: undefined,
  reward: undefined,
  save: jest.fn().mockImplementation(function () {
    return Promise.resolve(this); // Return the updated instance
  }),
};

class MockTaskModel {
  constructor(public data?: any) {}
  save() {
    return jest.fn().mockResolvedValue(this.data)();
  } // Defined as regular method
  static find = jest
    .fn()
    .mockReturnValue({ exec: jest.fn().mockResolvedValue([mockTask]) });
  static findById = jest
    .fn()
    .mockReturnValue({ exec: jest.fn().mockResolvedValue(mockTask) });
  static findByIdAndUpdate = jest
    .fn()
    .mockReturnValue({ exec: jest.fn().mockResolvedValue(mockTask) });
  static findByIdAndDelete = jest
    .fn()
    .mockReturnValue({ exec: jest.fn().mockResolvedValue(mockTask) });
}

// Mock UserTaskModel class
class MockUserTaskModel {
  constructor(public data?: any) {}
  save() {
    return jest.fn().mockResolvedValue(this.data)();
  } // Defined as regular method
  static findById = jest
    .fn()
    .mockReturnValue({ exec: jest.fn().mockResolvedValue(mockUserTask) });
}

describe('TasksService', () => {
  let service: TasksService;
  let taskModel: Model<Task>;
  let userTaskModel: Model<UserTask>;
  let eventEmitter: EventEmitter2;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getModelToken(Task.name),
          useValue: MockTaskModel, // Provide the mock class
        },
        {
          provide: getModelToken(UserTask.name),
          useValue: MockUserTaskModel, // Provide the mock class
        },
        {
          provide: EventEmitter2,
          useValue: {
            emit: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
    taskModel = module.get<Model<Task>>(getModelToken(Task.name));
    userTaskModel = module.get<Model<UserTask>>(getModelToken(UserTask.name));
    eventEmitter = module.get<EventEmitter2>(EventEmitter2);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new task', async () => {
    // No need to spy on constructor here, as it's handled by MockTaskModel
    const newTask = await service.create(mockTask as any);
    expect(newTask).toEqual(mockTask);
  });

  it('should return all tasks', async () => {
    jest.spyOn(taskModel, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce([mockTask]),
    } as any);
    const tasks = await service.findAll();
    expect(tasks).toEqual([mockTask]);
  });

  it('should return a single task', async () => {
    jest.spyOn(taskModel, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockTask),
    } as any);
    const task = await service.findOne('someId');
    expect(task).toEqual(mockTask);
  });

  it('should throw NotFoundException if task not found', async () => {
    jest.spyOn(taskModel, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(null),
    } as any);
    await expect(service.findOne('someId')).rejects.toThrow(NotFoundException);
  });

  it('should update a task', async () => {
    const updatedTask = { ...mockTask, title: 'Updated Title' };
    jest.spyOn(taskModel, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(updatedTask),
    } as any);
    const task = await service.update('someId', {
      title: 'Updated Title',
    } as any);
    expect(task).toEqual(updatedTask);
  });

  it('should throw NotFoundException if task not found on update', async () => {
    jest.spyOn(taskModel, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(null),
    } as any);
    await expect(
      service.update('someId', { title: 'Updated Title' } as any),
    ).rejects.toThrow(NotFoundException);
  });

  it('should delete a task', async () => {
    jest.spyOn(taskModel, 'findByIdAndDelete').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockTask),
    } as any);
    const task = await service.remove('someId');
    expect(task).toEqual(mockTask);
  });

  it('should throw NotFoundException if task not found on remove', async () => {
    jest.spyOn(taskModel, 'findByIdAndDelete').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(null),
    } as any);
    await expect(service.remove('someId')).rejects.toThrow(NotFoundException);
  });

  it('should complete a user task and emit an event', async () => {
    jest.spyOn(userTaskModel, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockUserTask),
    } as any);
    const completedUserTask = await service.completeTask('someUserTaskId');
    expect(completedUserTask.status).toBe('completed');
    expect(completedUserTask.completedAt).toBeInstanceOf(Date);
    expect(eventEmitter.emit).toHaveBeenCalledWith(
      'task.completed',
      completedUserTask,
    );
  });

  it('should throw NotFoundException if user task not found on complete', async () => {
    jest.spyOn(userTaskModel, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(null),
    } as any);
    await expect(service.completeTask('someUserTaskId')).rejects.toThrow(
      NotFoundException,
    );
  });
});
