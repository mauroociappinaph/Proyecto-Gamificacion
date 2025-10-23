// packages/common-types/src/interfaces/user-task.interface.ts
export interface UserTask {
  _id: string; // ObjectId is a string in this context
  userId: string; // ObjectId is a string in this context
  taskId: string; // ObjectId is a string in this context
  status: "pending" | "completed" | "failed";
  completedAt?: Date;
  evidence?: object;
  reward?: {
    points: number;
    coins: number;
  };
}
