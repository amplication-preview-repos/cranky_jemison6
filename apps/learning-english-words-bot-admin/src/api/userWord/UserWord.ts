import { Word } from "../word/Word";
import { User } from "../user/User";

export type UserWord = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  word?: Word | null;
  user?: User | null;
};
