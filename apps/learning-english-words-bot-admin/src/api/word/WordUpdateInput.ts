import { UserWordUpdateManyWithoutWordsInput } from "./UserWordUpdateManyWithoutWordsInput";

export type WordUpdateInput = {
  definition?: string | null;
  word?: string | null;
  userWords?: UserWordUpdateManyWithoutWordsInput;
};
