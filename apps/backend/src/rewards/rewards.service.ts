import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserTask, UserTaskDocument } from './schemas/user-task.schema';
import { ClaimRewardDto } from './dto/claim-reward.dto';
import { OnEvent } from '@nestjs/event-emitter';
import { Task, TaskDocument } from '../tasks/schemas/task.schema';

@Injectable()
export class RewardsService {
  constructor(
    @InjectModel(UserTask.name) private userTaskModel: Model<UserTaskDocument>,
    @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
  ) {}

  async findUserRewards(userId: string): Promise<UserTask[]> {
    return this.userTaskModel.find({ userId, status: 'completed' }).exec();
  }

  async claimReward(claimRewardDto: ClaimRewardDto): Promise<UserTask> {
    const { userTaskId } = claimRewardDto;
    const userTask = await this.userTaskModel.findById(userTaskId).exec();

    if (!userTask) {
      throw new NotFoundException('UserTask not found.');
    }

    if (userTask.status !== 'completed' || userTask.reward) {
      throw new Error('Reward cannot be claimed.');
    }

    const task = await this.taskModel.findById(userTask.taskId).exec();
    if (!task) {
      throw new NotFoundException('Task not found.');
    }

    // Here you would typically transfer the reward to the user's wallet
    // and then update the userTask to mark the reward as claimed.
    // For now, we'll just simulate it by setting the reward field.

    userTask.reward = task.rewards;

    return userTask.save();
  }

  @OnEvent('task.completed')
  handleTaskCompletedEvent(payload: UserTask) {
    // For now, just log the event.
    // In the future, this will trigger the reward logic.
    console.log('Task completed event received:', payload);
  }
}
