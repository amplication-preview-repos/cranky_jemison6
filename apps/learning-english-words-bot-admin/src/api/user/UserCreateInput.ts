import { InputJsonValue } from "../../types";
import { UserWordCreateNestedManyWithoutUsersInput } from "./UserWordCreateNestedManyWithoutUsersInput";
import { QuizCreateNestedManyWithoutUsersInput } from "./QuizCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  telegramId?: number | null;
  userWords?: UserWordCreateNestedManyWithoutUsersInput;
  quizzes?: QuizCreateNestedManyWithoutUsersInput;
};
