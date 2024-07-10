import { UserWordWhereInput } from "./UserWordWhereInput";
import { UserWordOrderByInput } from "./UserWordOrderByInput";

export type UserWordFindManyArgs = {
  where?: UserWordWhereInput;
  orderBy?: Array<UserWordOrderByInput>;
  skip?: number;
  take?: number;
};
