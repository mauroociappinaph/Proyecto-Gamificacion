import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema({
  timestamps: true,
  collection: 'payments',
})
export class Payment {
  @Prop({ type: MongooseSchema.Types.ObjectId, required: true })
  userId: MongooseSchema.Types.ObjectId;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: String, required: true })
  currency: string;

  @Prop({ type: String, enum: ['deposit', 'withdrawal'], required: true })
  type: 'deposit' | 'withdrawal';

  @Prop({
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  })
  status: 'pending' | 'completed' | 'failed';

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Transaction' })
  transactionId: MongooseSchema.Types.ObjectId;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
