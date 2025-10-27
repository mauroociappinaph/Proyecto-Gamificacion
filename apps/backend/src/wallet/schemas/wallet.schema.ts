import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type WalletDocument = Wallet & Document;

@Schema({
  timestamps: true,
  collection: 'wallets',
})
export class Wallet {
  @Prop({ type: MongooseSchema.Types.ObjectId, required: true, unique: true })
  userId: MongooseSchema.Types.ObjectId;

  @Prop({ type: Number, default: 0 })
  balance: number;

  @Prop({ type: String, default: 'USD' })
  currency: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Transaction' }] })
  transactions: MongooseSchema.Types.ObjectId[];
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
