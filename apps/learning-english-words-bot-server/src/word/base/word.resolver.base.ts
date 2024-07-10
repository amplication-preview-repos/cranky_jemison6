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
import { Word } from "./Word";
import { WordCountArgs } from "./WordCountArgs";
import { WordFindManyArgs } from "./WordFindManyArgs";
import { WordFindUniqueArgs } from "./WordFindUniqueArgs";
import { CreateWordArgs } from "./CreateWordArgs";
import { UpdateWordArgs } from "./UpdateWordArgs";
import { DeleteWordArgs } from "./DeleteWordArgs";
import { UserWordFindManyArgs } from "../../userWord/base/UserWordFindManyArgs";
import { UserWord } from "../../userWord/base/UserWord";
import { WordService } from "../word.service";
@graphql.Resolver(() => Word)
export class WordResolverBase {
  constructor(protected readonly service: WordService) {}

  async _wordsMeta(
    @graphql.Args() args: WordCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Word])
  async words(@graphql.Args() args: WordFindManyArgs): Promise<Word[]> {
    return this.service.words(args);
  }

  @graphql.Query(() => Word, { nullable: true })
  async word(@graphql.Args() args: WordFindUniqueArgs): Promise<Word | null> {
    const result = await this.service.word(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Word)
  async createWord(@graphql.Args() args: CreateWordArgs): Promise<Word> {
    return await this.service.createWord({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Word)
  async updateWord(@graphql.Args() args: UpdateWordArgs): Promise<Word | null> {
    try {
      return await this.service.updateWord({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Word)
  async deleteWord(@graphql.Args() args: DeleteWordArgs): Promise<Word | null> {
    try {
      return await this.service.deleteWord(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [UserWord], { name: "userWords" })
  async findUserWords(
    @graphql.Parent() parent: Word,
    @graphql.Args() args: UserWordFindManyArgs
  ): Promise<UserWord[]> {
    const results = await this.service.findUserWords(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
