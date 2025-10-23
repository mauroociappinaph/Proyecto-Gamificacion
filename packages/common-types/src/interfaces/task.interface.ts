// packages/common-types/src/interfaces/task.interface.ts
export interface Task {
  _id: string; // ObjectId is a string in this context
  gameId: string; // ObjectId is a string in this context
  title: string;
  description: string;
  requirements: object; // or a more specific interface
  rewards: {
    points: number;
    coins: number;
  };
  isActive: boolean;
  createdAt: Date;
}
