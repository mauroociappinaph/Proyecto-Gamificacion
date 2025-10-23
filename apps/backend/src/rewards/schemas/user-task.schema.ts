import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type UserTaskDocument = UserTask & Document;

@Schema({ timestamps: true })
export class UserTask {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  userId: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Task', required: true })
  taskId: MongooseSchema.Types.ObjectId;

  @Prop({ required: true, enum: ['pending', 'completed', 'failed'] })
  status: 'pending' | 'completed' | 'failed';

  @Prop()
  completedAt?: Date;

  @Prop({ type: Object })
  evidence?: object;

  @Prop({ type: { points: Number, coins: Number } })
  reward?: {
    points: number;
    coins: number;
  };
}

export const UserTaskSchema = SchemaFactory.createForClass(UserTask);
