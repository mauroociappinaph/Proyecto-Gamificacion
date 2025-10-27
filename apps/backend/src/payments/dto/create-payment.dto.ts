import {
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
  IsEnum,
} from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';

export class CreatePaymentDto {
  @IsMongoId()
  userId: MongooseSchema.Types.ObjectId;

  @IsNumber()
  amount: number;

  @IsString()
  currency: string;

  @IsEnum(['deposit', 'withdrawal'])
  type: 'deposit' | 'withdrawal';

  @IsEnum(['pending', 'completed', 'failed'])
  @IsOptional()
  status?: 'pending' | 'completed' | 'failed';

  @IsMongoId()
  @IsOptional()
  transactionId?: MongooseSchema.Types.ObjectId;
}
