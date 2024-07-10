import { SortOrder } from "../../util/SortOrder";

export type UserWordOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  wordId?: SortOrder;
  userId?: SortOrder;
};
