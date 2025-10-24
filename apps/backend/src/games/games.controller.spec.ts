import { Test, TestingModule } from '@nestjs/testing';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

const mockGamesService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('GamesController', () => {
  let controller: GamesController;
  let service: GamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamesController],
      providers: [
        {
          provide: GamesService,
          useValue: mockGamesService,
        },
      ],
    }).compile();

    controller = module.get<GamesController>(GamesController);
    service = module.get<GamesService>(GamesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a game', async () => {
    const createGameDto: CreateGameDto = {
      title: 'Test Game',
      description: 'Test Description',
      category: 'Test Category',
      difficulty: 'easy',
      rules: {},
      rewards: { points: 10, coins: 5 },
      isActive: true,
    };
    mockGamesService.create.mockResolvedValueOnce(createGameDto);
    expect(await controller.create(createGameDto)).toEqual(createGameDto);
    expect(service.create).toHaveBeenCalledWith(createGameDto);
  });

  it('should find all games', async () => {
    mockGamesService.findAll.mockResolvedValueOnce([]);
    expect(await controller.findAll()).toEqual([]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should find one game', async () => {
    const gameId = 'someId';
    mockGamesService.findOne.mockResolvedValueOnce({});
    expect(await controller.findOne(gameId)).toEqual({});
    expect(service.findOne).toHaveBeenCalledWith(gameId);
  });

  it('should update a game', async () => {
    const gameId = 'someId';
    const updateGameDto: UpdateGameDto = { title: 'Updated Title' };
    mockGamesService.update.mockResolvedValueOnce({});
    expect(await controller.update(gameId, updateGameDto)).toEqual({});
    expect(service.update).toHaveBeenCalledWith(gameId, updateGameDto);
  });

  it('should remove a game', async () => {
    const gameId = 'someId';
    mockGamesService.remove.mockResolvedValueOnce({});
    expect(await controller.remove(gameId)).toEqual({});
    expect(service.remove).toHaveBeenCalledWith(gameId);
  });
});
