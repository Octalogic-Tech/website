import {
  Body,
  createHandler,
  HttpCode,
  InternalServerErrorException,
  Post,
  ValidationPipe,
} from "next-api-decorators";

import { ContactDTO } from "../../../dto/contact.dto";
import { ICloufdlareVerifyResponse, IFormData } from "../../../interfaces";

import * as vars from "../../../config/vars";
import { formatData } from "../../../utils/utils";

import { PreconditionFailedException } from "../../../exceptions/preconditionFailed";
import { FailedDependencyException } from "../../../exceptions/failedDependency";

class ContactHandler {
  verifyTurnstileToken = async (turnstileToken: string) => {
    if (vars.turnstileEndpoint && vars.turnstileSecretKey) {
      const turnstileBody = `secret=${encodeURIComponent(
        vars.turnstileSecretKey,
      )}&response=${encodeURIComponent(turnstileToken)}`;

      const turnstileOptions = {
        method: "POST",
        body: turnstileBody,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      };

      const verifyResponse = await fetch(vars.turnstileEndpoint, turnstileOptions);
      const verifyData: ICloufdlareVerifyResponse =
        (await verifyResponse.json()) as ICloufdlareVerifyResponse;

      if (!verifyData.success) {
        throw new PreconditionFailedException();
      }
    } else {
      // throwing an error because validation should always exist
      throw new FailedDependencyException();
    }
  };

  sendToSlack = async (formData: IFormData) => {
    const slackData = formatData(formData);
    const slackOptions = {
      method: "POST",
      body: JSON.stringify(slackData),
    };

    if (vars.slackWebhookUrl) {
      try {
        await fetch(vars.slackWebhookUrl, slackOptions);
      } catch {
        throw new InternalServerErrorException();
      }
    } else throw new FailedDependencyException();
  };

  @HttpCode(201)
  @Post()
  async contact(@Body(ValidationPipe) contactBody: ContactDTO) {
    const { turnstileToken, ...formData } = contactBody;
    await this.verifyTurnstileToken(turnstileToken);
    await this.sendToSlack(formData);
    return { message: "Success" };
  }
}

export default createHandler(ContactHandler);
