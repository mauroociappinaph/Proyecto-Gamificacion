import { IsMongoId, IsNumber, IsOptional, IsString } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';

export class CreateWalletDto {
  @IsMongoId()
  userId: MongooseSchema.Types.ObjectId;

  @IsNumber()
  @IsOptional()
  balance?: number;

  @IsString()
  @IsOptional()
  currency?: string;
}
