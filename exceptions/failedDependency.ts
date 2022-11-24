import { HttpException } from "next-api-decorators";

export class FailedDependencyException extends HttpException {
  public constructor(message: string = "Failed Dependency") {
    super(424, message);
  }
}
