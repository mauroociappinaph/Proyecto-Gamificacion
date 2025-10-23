// packages/common-types/src/interfaces/game.interface.ts
export interface Game {
  _id: string; // ObjectId is a string in this context
  title: string;
  description: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  rules: object; // or a more specific interface
  rewards: {
    points: number;
    coins: number;
  };
  isActive: boolean;
  createdAt: Date;
}
