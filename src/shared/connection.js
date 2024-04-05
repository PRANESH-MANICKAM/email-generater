import nodemailer from "nodemailer";
import * as dotenv from "dotenv-safe";

dotenv.config();

const connection = nodemailer.createTransport({
  host: process.env.HOST,
  port: process.env.SMTP_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default connection;
