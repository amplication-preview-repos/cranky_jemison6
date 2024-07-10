import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWordListRelationFilter } from "../userWord/UserWordListRelationFilter";
import { QuizListRelationFilter } from "../quiz/QuizListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  telegramId?: IntNullableFilter;
  userWords?: UserWordListRelationFilter;
  quizzes?: QuizListRelationFilter;
};
