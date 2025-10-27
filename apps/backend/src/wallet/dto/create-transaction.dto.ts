import {
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
  IsEnum,
} from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';

export class CreateTransactionDto {
  @IsMongoId()
  walletId: MongooseSchema.Types.ObjectId;

  @IsEnum(['deposit', 'withdrawal', 'reward', 'purchase'])
  type: 'deposit' | 'withdrawal' | 'reward' | 'purchase';

  @IsNumber()
  amount: number;

  @IsString()
  currency: string;

  @IsString()
  @IsOptional()
  description?: string;
}
