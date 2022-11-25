import { HttpException } from "next-api-decorators";

export class PreconditionFailedException extends HttpException {
  public constructor(message: string = "Unable to log your request") {
    super(412, message);
  }
}
