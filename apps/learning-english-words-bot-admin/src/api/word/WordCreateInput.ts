import { UserWordCreateNestedManyWithoutWordsInput } from "./UserWordCreateNestedManyWithoutWordsInput";

export type WordCreateInput = {
  definition?: string | null;
  word?: string | null;
  userWords?: UserWordCreateNestedManyWithoutWordsInput;
};
