import html from "./template.js";
import connection from "./connection.js";
import nodemailer from "nodemailer";

const mail = async (details) => {
  const { toEmail, subject, content } = details;

  // send mail with defined transport object
  const info = await connection.sendMail({
    from: `Pranesh 👻 <${process.env.FROM}>`, // sender address
    to: toEmail, // single or list of receivers
    subject: subject, // Subject line
    text: content, // plain text body
    html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: ", nodemailer.getTestMessageUrl(info));
};

export default mail;
