import { StringFilter } from "../../util/StringFilter";
import { WordWhereUniqueInput } from "../word/WordWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserWordWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  word?: WordWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
