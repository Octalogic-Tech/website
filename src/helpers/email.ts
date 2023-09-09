import * as vars from "@/config/vars";

import { IEmailPayload } from "../interfaces";

export const sendEmail = async (payload: IEmailPayload) => {
  try {
    const body = {
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
      html: payload.body,
    };

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${vars.emailApiKey}`,
      },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    throw error;
  }
};
