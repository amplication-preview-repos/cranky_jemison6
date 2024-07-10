import { User } from "../user/User";

export type Quiz = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  question: string | null;
  correctAnswer: string | null;
  userAnswer: string | null;
  isCorrect: boolean | null;
  user?: User | null;
};
