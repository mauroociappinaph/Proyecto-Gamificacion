import { IsString, IsObject, IsBoolean, IsNotEmpty } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  gameId: MongooseSchema.Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsObject()
  requirements: object;

  @IsObject()
  rewards: {
    points: number;
    coins: number;
  };

  @IsBoolean()
  isActive: boolean;
}
