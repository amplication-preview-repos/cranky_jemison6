import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserWordServiceBase } from "./base/userWord.service.base";

@Injectable()
export class UserWordService extends UserWordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
