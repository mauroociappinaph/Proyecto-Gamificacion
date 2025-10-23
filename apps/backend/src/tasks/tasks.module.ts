import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { Task, TaskSchema } from './schemas/task.schema';
import { UserTask, UserTaskSchema } from '../rewards/schemas/user-task.schema';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
    MongooseModule.forFeature([
      { name: UserTask.name, schema: UserTaskSchema },
    ]),
    EventEmitterModule.forRoot(),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
