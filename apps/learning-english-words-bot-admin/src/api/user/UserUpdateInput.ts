import { InputJsonValue } from "../../types";
import { UserWordUpdateManyWithoutUsersInput } from "./UserWordUpdateManyWithoutUsersInput";
import { QuizUpdateManyWithoutUsersInput } from "./QuizUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  telegramId?: number | null;
  userWords?: UserWordUpdateManyWithoutUsersInput;
  quizzes?: QuizUpdateManyWithoutUsersInput;
};
