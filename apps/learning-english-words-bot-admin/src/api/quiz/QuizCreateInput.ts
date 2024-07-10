import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuizCreateInput = {
  question?: string | null;
  correctAnswer?: string | null;
  userAnswer?: string | null;
  isCorrect?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
