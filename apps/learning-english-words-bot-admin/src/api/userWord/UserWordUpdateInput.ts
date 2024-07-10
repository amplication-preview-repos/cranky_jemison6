import { WordWhereUniqueInput } from "../word/WordWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserWordUpdateInput = {
  status?: "Option1" | null;
  word?: WordWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
