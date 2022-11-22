import type { NextApiRequest, NextApiResponse } from "next";

import { IFormData } from "../../../interfaces";

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
    const turnstileBody = `secret=${encodeURIComponent(
      vars.turnstileSecretKey,
    )}&response=${encodeURIComponent(turnstileToken)}`;
    const slackData = formatData(formData);

    const turnstileOptions = {
      method: "POST",
      body: turnstileBody,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    };

    const slackOptions = {
      method: "POST",
      body: JSON.stringify(slackData),
    };

    if (vars.slackWebhookUrl && vars.turnstileEndpoint && vars.turnstileSecretKey) {
      try {
        await fetch(vars.turnstileEndpoint, turnstileOptions);
        await fetch(vars.slackWebhookUrl, slackOptions);
        res.status(201).json({ message: "Success" });
      } catch (error) {
        res.status(500).json({ message: "Unable to save data" });
      }
    } else res.status(400).json({ message: "Unable to save data" });
  }
}
