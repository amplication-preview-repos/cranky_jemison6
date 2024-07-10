import { UserWord as TUserWord } from "../api/userWord/UserWord";

export const USERWORD_TITLE_FIELD = "id";

export const UserWordTitle = (record: TUserWord): string => {
  return record.id?.toString() || String(record.id);
};
