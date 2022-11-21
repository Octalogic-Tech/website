import type { NextApiRequest, NextApiResponse } from "next";

import { IFormData } from "../../../interfaces";

import { slackWebhookUrl } from "../../../config/vars";

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
    const formData = req.body;
    const slackData = formatData(formData);

    const options = {
      method: "POST",
      body: JSON.stringify(slackData),
    };

    if (slackWebhookUrl)
      try {
        await fetch(slackWebhookUrl, options);
        res.status(201).json({ message: "Success" });
      } catch (error) {
        res.status(500).json({ message: "Unable to save data" });
      }
    else res.status(400).json({ message: "Unable to save data" });
  }
}
