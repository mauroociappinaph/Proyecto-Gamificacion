import { IsString, IsNotEmpty } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';

export class ClaimRewardDto {
  @IsString()
  @IsNotEmpty()
  userTaskId: MongooseSchema.Types.ObjectId;
}
