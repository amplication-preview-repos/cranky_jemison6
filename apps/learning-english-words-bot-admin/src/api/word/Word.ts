import { UserWord } from "../userWord/UserWord";

export type Word = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  definition: string | null;
  word: string | null;
  userWords?: Array<UserWord>;
};
