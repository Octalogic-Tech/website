import nodemailer from "nodemailer";
import * as vars from "../config/vars";

const buff = Buffer.from(vars.gmailCredentials, "base64");
const credentials = buff.toString("ascii").split(":");
const gmail = credentials[0];
const gmailClientId = credentials[1];
const gmailClientSecret = credentials[2];
const gmailRefreshToken = credentials[3];

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: gmail,
    clientId: gmailClientId,
    clientSecret: gmailClientSecret,
    refreshToken: gmailRefreshToken,
  },
});

export const mailOptions = {
  from: gmail,
  to: gmail,
};
