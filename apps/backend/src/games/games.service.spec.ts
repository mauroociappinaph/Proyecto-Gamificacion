import { Test, TestingModule } from '@nestjs/testing';
import { GamesService } from './games.service';
import { getModelToken } from '@nestjs/mongoose';
import { Game } from './schemas/game.schema';
import { Model } from 'mongoose';

const mockGame: any = {
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
mockGame.save = jest.fn().mockResolvedValue(mockGame);

// Mock GameModel class
class MockGameModel {
  constructor(public data?: any) {} // Made data public
  save() {
    return jest.fn().mockResolvedValue(this.data)();
  } // Defined as regular method
  static find = jest
    .fn()
    .mockReturnValue({ exec: jest.fn().mockResolvedValue([mockGame]) });
  static findById = jest
    .fn()
    .mockReturnValue({ exec: jest.fn().mockResolvedValue(mockGame) });
  static findByIdAndUpdate = jest
    .fn()
    .mockReturnValue({ exec: jest.fn().mockResolvedValue(mockGame) });
  static findByIdAndDelete = jest
    .fn()
    .mockReturnValue({ exec: jest.fn().mockResolvedValue(mockGame) });
}

describe('GamesService', () => {
  let service: GamesService;
  let model: Model<Game>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GamesService,
        {
          provide: getModelToken(Game.name),
          useValue: MockGameModel, // Provide the mock class
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
    // No need to spy on constructor here, as it's handled by MockGameModel
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
    jest.spyOn(model, 'findByIdAndDelete').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(mockGame),
    } as any);
    const game = await service.remove('someId');
    expect(game).toEqual(mockGame);
  });
});
