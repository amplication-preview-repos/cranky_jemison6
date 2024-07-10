import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWordListRelationFilter } from "../userWord/UserWordListRelationFilter";

export type WordWhereInput = {
  id?: StringFilter;
  definition?: StringNullableFilter;
  word?: StringNullableFilter;
  userWords?: UserWordListRelationFilter;
};
