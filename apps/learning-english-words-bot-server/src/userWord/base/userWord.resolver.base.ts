/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { UserWord } from "./UserWord";
import { UserWordCountArgs } from "./UserWordCountArgs";
import { UserWordFindManyArgs } from "./UserWordFindManyArgs";
import { UserWordFindUniqueArgs } from "./UserWordFindUniqueArgs";
import { CreateUserWordArgs } from "./CreateUserWordArgs";
import { UpdateUserWordArgs } from "./UpdateUserWordArgs";
import { DeleteUserWordArgs } from "./DeleteUserWordArgs";
import { Word } from "../../word/base/Word";
import { User } from "../../user/base/User";
import { UserWordService } from "../userWord.service";
@graphql.Resolver(() => UserWord)
export class UserWordResolverBase {
  constructor(protected readonly service: UserWordService) {}

  async _userWordsMeta(
    @graphql.Args() args: UserWordCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserWord])
  async userWords(
    @graphql.Args() args: UserWordFindManyArgs
  ): Promise<UserWord[]> {
    return this.service.userWords(args);
  }

  @graphql.Query(() => UserWord, { nullable: true })
  async userWord(
    @graphql.Args() args: UserWordFindUniqueArgs
  ): Promise<UserWord | null> {
    const result = await this.service.userWord(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserWord)
  async createUserWord(
    @graphql.Args() args: CreateUserWordArgs
  ): Promise<UserWord> {
    return await this.service.createUserWord({
      ...args,
      data: {
        ...args.data,

        word: args.data.word
          ? {
              connect: args.data.word,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => UserWord)
  async updateUserWord(
    @graphql.Args() args: UpdateUserWordArgs
  ): Promise<UserWord | null> {
    try {
      return await this.service.updateUserWord({
        ...args,
        data: {
          ...args.data,

          word: args.data.word
            ? {
                connect: args.data.word,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserWord)
  async deleteUserWord(
    @graphql.Args() args: DeleteUserWordArgs
  ): Promise<UserWord | null> {
    try {
      return await this.service.deleteUserWord(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Word, {
    nullable: true,
    name: "word",
  })
  async getWord(@graphql.Parent() parent: UserWord): Promise<Word | null> {
    const result = await this.service.getWord(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: UserWord): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
