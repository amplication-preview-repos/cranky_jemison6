import { Module } from "@nestjs/common";
import { UserWordModuleBase } from "./base/userWord.module.base";
import { UserWordService } from "./userWord.service";
import { UserWordController } from "./userWord.controller";
import { UserWordResolver } from "./userWord.resolver";

@Module({
  imports: [UserWordModuleBase],
  controllers: [UserWordController],
  providers: [UserWordService, UserWordResolver],
  exports: [UserWordService],
})
export class UserWordModule {}
