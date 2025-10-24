import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Schema as MongooseSchema } from 'mongoose'; // Import MongooseSchema

const mockTasksService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: mockTasksService,
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a task', async () => {
    const createTaskDto: CreateTaskDto = {
      gameId: 'someGameId' as unknown as MongooseSchema.Types.ObjectId, // Cast to ObjectId
      title: 'Test Task',
      description: 'Test Description',
      requirements: {},
      rewards: { points: 10, coins: 5 },
      isActive: true,
    };
    mockTasksService.create.mockResolvedValueOnce(createTaskDto);
    expect(await controller.create(createTaskDto)).toEqual(createTaskDto);
    expect(service.create).toHaveBeenCalledWith(createTaskDto);
  });

  it('should find all tasks', async () => {
    mockTasksService.findAll.mockResolvedValueOnce([]);
    expect(await controller.findAll()).toEqual([]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should find one task', async () => {
    const taskId = 'someId';
    mockTasksService.findOne.mockResolvedValueOnce({});
    expect(await controller.findOne(taskId)).toEqual({});
    expect(service.findOne).toHaveBeenCalledWith(taskId);
  });

  it('should update a task', async () => {
    const taskId = 'someId';
    const updateTaskDto: UpdateTaskDto = { title: 'Updated Title' };
    mockTasksService.update.mockResolvedValueOnce({});
    expect(await controller.update(taskId, updateTaskDto)).toEqual({});
    expect(service.update).toHaveBeenCalledWith(taskId, updateTaskDto);
  });

  it('should remove a task', async () => {
    const taskId = 'someId';
    mockTasksService.remove.mockResolvedValueOnce({});
    expect(await controller.remove(taskId)).toEqual({});
    expect(service.remove).toHaveBeenCalledWith(taskId);
  });
});
