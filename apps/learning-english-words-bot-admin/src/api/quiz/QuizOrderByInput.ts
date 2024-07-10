import { SortOrder } from "../../util/SortOrder";

export type QuizOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  question?: SortOrder;
  correctAnswer?: SortOrder;
  userAnswer?: SortOrder;
  isCorrect?: SortOrder;
  userId?: SortOrder;
};
