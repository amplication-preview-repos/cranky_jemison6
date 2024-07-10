import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QuizWhereInput = {
  id?: StringFilter;
  question?: StringNullableFilter;
  correctAnswer?: StringNullableFilter;
  userAnswer?: StringNullableFilter;
  isCorrect?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
};
