import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { Wallet, WalletDocument } from './schemas/wallet.schema';
import { Transaction, TransactionDocument } from './schemas/transaction.schema';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class WalletService {
  constructor(
    @InjectModel(Wallet.name) private walletModel: Model<WalletDocument>,
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
  ) {}

  async create(createWalletDto: CreateWalletDto): Promise<Wallet> {
    const createdWallet = new this.walletModel(createWalletDto);
    return createdWallet.save();
  }

  async findAll(): Promise<Wallet[]> {
    return this.walletModel.find().exec();
  }

  async findOne(id: string): Promise<Wallet> {
    const wallet = await this.walletModel.findById(id).exec();
    if (!wallet) {
      throw new NotFoundException(`Wallet with ID ${id} not found`);
    }
    return wallet;
  }

  async update(id: string, updateWalletDto: UpdateWalletDto): Promise<Wallet> {
    const wallet = await this.walletModel
      .findByIdAndUpdate(id, updateWalletDto, { new: true })
      .exec();
    if (!wallet) {
      throw new NotFoundException(`Wallet with ID ${id} not found`);
    }
    return wallet;
  }

  async remove(id: string): Promise<Wallet> {
    const wallet = await this.walletModel.findByIdAndDelete(id).exec();
    if (!wallet) {
      throw new NotFoundException(`Wallet with ID ${id} not found`);
    }
    return wallet;
  }

  async addTransaction(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Wallet> {
    const { walletId, type, amount, currency, description } =
      createTransactionDto;
    const wallet = await this.walletModel.findById(walletId).exec();

    if (!wallet) {
      throw new NotFoundException(`Wallet with ID ${walletId} not found`);
    }

    const transaction = new this.transactionModel({
      walletId,
      type,
      amount,
      currency,
      description,
    });
    const createdTransaction = await transaction.save();

    wallet.transactions.push(
      createdTransaction._id as MongooseSchema.Types.ObjectId,
    );

    if (type === 'deposit' || type === 'reward') {
      wallet.balance += amount;
    } else if (type === 'withdrawal' || type === 'purchase') {
      wallet.balance -= amount;
    }

    return wallet.save();
  }
}
