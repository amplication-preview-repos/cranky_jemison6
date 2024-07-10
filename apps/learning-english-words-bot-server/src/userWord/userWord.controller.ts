import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserWordService } from "./userWord.service";
import { UserWordControllerBase } from "./base/userWord.controller.base";

@swagger.ApiTags("userWords")
@common.Controller("userWords")
export class UserWordController extends UserWordControllerBase {
  constructor(protected readonly service: UserWordService) {
    super(service);
  }
}
