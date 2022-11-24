import { HttpException } from "next-api-decorators";

export class PreconditionFailedException extends HttpException {
  public constructor(message: string = "Precondition Failed") {
    super(412, message);
  }
}
