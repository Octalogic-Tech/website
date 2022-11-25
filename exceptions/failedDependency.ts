import { HttpException } from "next-api-decorators";

export class FailedDependencyException extends HttpException {
  public constructor(message: string = "Unable to log your request") {
    super(424, message);
  }
}
