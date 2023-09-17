import { IFormData } from "../interfaces";

export const formatData = (data: IFormData) => {
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
