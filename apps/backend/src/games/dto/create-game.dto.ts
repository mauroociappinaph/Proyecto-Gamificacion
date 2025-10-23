import {
  IsString,
  IsObject,
  IsBoolean,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsEnum(['easy', 'medium', 'hard'])
  @IsNotEmpty()
  difficulty: 'easy' | 'medium' | 'hard';

  @IsObject()
  rules: object;

  @IsObject()
  rewards: {
    points: number;
    coins: number;
  };

  @IsBoolean()
  isActive: boolean;
}
