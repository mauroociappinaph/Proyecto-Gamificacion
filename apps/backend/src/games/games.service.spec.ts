import { Test, TestingModule } from '@nestjs/testing';
import { GamesService } from './games.service';
import { getModelToken } from '@nestjs/mongoose';
import { Game } from './schemas/game.schema';
import { Model } from 'mongoose';

const mockGame = {
  title: 'Test Game',
  description: 'Test Description',
  category: 'Test Category',
  difficulty: 'easy',
  rules: {},
  rewards: {
    points: 10,
    coins: 5,
  },
  isActive: true,
};

describe('GamesService', () => {
  let service: GamesService;
  let model: Model<Game>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GamesService,
        {
          provide: getModelToken(Game.name),
          useValue: {
            new: jest.fn().mockResolvedValue(mockGame),
            constructor: jest.fn().mockResolvedValue(mockGame),
            find: jest.fn(),
            findById: jest.fn(),
            findByIdAndUpdate: jest.fn(),
            findByIdAndRemove: jest.fn(),
            exec: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<GamesService>(GamesService);
    model = module.get<Model<Game>>(getModelToken(Game.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new game', async () => {
    const newGame = await service.create(mockGame as any);
    expect(newGame).toEqual(mockGame);
  });

  it('should return all games', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce([mockGame]),
    } as any);
    const games = await service.findAll();
    expect(games).toEqual([mockGame]);
  });

  it('should return a single game', async () => {
    jest.spyOn(model, 'findById').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockGame),
    } as any);
    const game = await service.findOne('someId');
    expect(game).toEqual(mockGame);
  });

  it('should update a game', async () => {
    const updatedGame = { ...mockGame, title: 'Updated Title' };
    jest.spyOn(model, 'findByIdAndUpdate').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(updatedGame),
    } as any);
    const game = await service.update('someId', {
      title: 'Updated Title',
    } as any);
    expect(game).toEqual(updatedGame);
  });

  it('should delete a game', async () => {
    jest.spyOn(model, 'findByIdAndRemove').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockGame),
    } as any);
    const game = await service.remove('someId');
    expect(game).toEqual(mockGame);
  });
});
