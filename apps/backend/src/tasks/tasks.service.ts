import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';
import {
  UserTask,
  UserTaskDocument,
} from '../rewards/schemas/user-task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private taskModel: Model<TaskDocument>,
    @InjectModel(UserTask.name) private userTaskModel: Model<UserTaskDocument>,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.taskModel
      .findByIdAndUpdate(id, updateTaskDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Task> {
    return this.taskModel.findByIdAndRemove(id).exec();
  }

  async completeTask(userTaskId: string): Promise<UserTask> {
    const userTask = await this.userTaskModel.findById(userTaskId).exec();
    if (!userTask) {
      throw new Error('UserTask not found.');
    }

    userTask.status = 'completed';
    userTask.completedAt = new Date();

    const completedUserTask = await userTask.save();

    this.eventEmitter.emit('task.completed', completedUserTask);

    return completedUserTask;
  }
}
