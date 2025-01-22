import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "achal02gupta@gmail.com",
    pass: "xxxf eohe bajf jsyj",
  },
});
