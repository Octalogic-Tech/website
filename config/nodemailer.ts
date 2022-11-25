import nodemailer from "nodemailer";
import * as vars from "../config/vars";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: vars.email,
    pass: vars.emailAppPass,
  },
});

export const mailOptions = {
  from: vars.email,
  to: vars.email,
};
