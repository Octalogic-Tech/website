import type { NextApiRequest, NextApiResponse } from "next";

import { IFormData, ICloufdlareVerifyResponse } from "../../../interfaces";

import * as vars from "../../../config/vars";

const formatData = (data: IFormData) => {
  const formattedData = Object.keys(data).map((key) => {
    const captalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
    return {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*${captalizedKey}*\n${data[key as keyof typeof data]}`,
      },
    };
  });

  return {
    text: "New Contact",
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "New contact",
        },
      },
      ...formattedData,
    ],
  };
};

export default async function Handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { turnstileToken, ...formData } = req.body;

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
        res.status(412).json({ message: "Invalid payload" });
        return;
      }
    } else {
      // throwing an error because validation should always exist
      res.status(424).json({ message: "Invalid payload" });
      return;
    }

    const slackData = formatData(formData);
    const slackOptions = {
      method: "POST",
      body: JSON.stringify(slackData),
    };

    if (vars.slackWebhookUrl) {
      try {
        await fetch(vars.slackWebhookUrl, slackOptions);
        res.status(201).json({ message: "Success" });
      } catch (error) {
        res.status(500).json({ message: "Unable to save data" });
      }
    } else res.status(424).json({ message: "Unable to save data" });
  } else res.status(422).json({ message: "Invalid action" });
}
