import { WordWhereUniqueInput } from "../word/WordWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserWordCreateInput = {
  status?: "Option1" | null;
  word?: WordWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
