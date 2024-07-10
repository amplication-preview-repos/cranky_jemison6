import { JsonValue } from "type-fest";
import { UserWord } from "../userWord/UserWord";
import { Quiz } from "../quiz/Quiz";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  telegramId: number | null;
  userWords?: Array<UserWord>;
  quizzes?: Array<Quiz>;
};
