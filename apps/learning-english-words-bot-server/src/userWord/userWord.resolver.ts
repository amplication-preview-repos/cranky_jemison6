import * as graphql from "@nestjs/graphql";
import { UserWordResolverBase } from "./base/userWord.resolver.base";
import { UserWord } from "./base/UserWord";
import { UserWordService } from "./userWord.service";

@graphql.Resolver(() => UserWord)
export class UserWordResolver extends UserWordResolverBase {
  constructor(protected readonly service: UserWordService) {
    super(service);
  }
}
