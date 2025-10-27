import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema({
  timestamps: true,
  collection: 'transactions',
})
export class Transaction {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Wallet', required: true })
  walletId: MongooseSchema.Types.ObjectId;

  @Prop({
    type: String,
    enum: ['deposit', 'withdrawal', 'reward', 'purchase'],
    required: true,
  })
  type: 'deposit' | 'withdrawal' | 'reward' | 'purchase';

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: String, required: true })
  currency: string;

  @Prop({ type: Date, default: Date.now })
  date: Date;

  @Prop({ type: String })
  description: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
