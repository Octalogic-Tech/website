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

import * as vars from "@/config/vars";
import { formatData } from "@/utils";

import * as emailHelpers from "@/helpers/email";

import { PreconditionFailedException } from "../../../exceptions/preconditionFailed";
import { FailedDependencyException } from "../../../exceptions/failedDependency";

import * as templates from "./template";

export const runtime = "edge";
export const dynamic = "force-dynamic";

class ContactHandler {
  verifyTurnstileToken = async (turnstileToken: string): Promise<boolean> => {
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

    return true;
  };

  sendToSlack = async (formData: IFormData): Promise<boolean> => {
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
    } else if (vars.isLive) throw new FailedDependencyException();

    return true;
  };

  respondWithEmail = async (formData: IFormData): Promise<boolean> => {
    // send an email to the person that tried to get in touch
    await Promise.allSettled([
      emailHelpers.sendEmail({
        from: "contactus@updates.octalogic.in",
        to: formData.email,
        subject: "Thank you for reaching out!",
        body: templates.userTemplate(formData.name),
      }),
      emailHelpers.sendEmail({
        from: "contactus@updates.octalogic.in",
        to: vars.notificationEmail,
        subject: "Website Contact Us Request",
        body: templates.adminTemplate(formData),
      }),
    ]);

    return true;
  };

  @HttpCode(201)
  @Post()
  async contact(@Body(ValidationPipe) contactBody: ContactDTO) {
    const { turnstileToken, ...formData } = contactBody;
    const isVerified: boolean = await this.verifyTurnstileToken(turnstileToken);
    if (isVerified)
      await Promise.allSettled([this.respondWithEmail(formData), this.sendToSlack(formData)]);

    return {
      message: isVerified
        ? "Thank you. We'll be in touch with you shortly"
        : "Unable to log your request",
    };
  }
}

export default createHandler(ContactHandler);
