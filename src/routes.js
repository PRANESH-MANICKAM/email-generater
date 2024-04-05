import * as express from "express";
import mail from "./shared/mail.js";

const routes = () => {
  const router = express.Router();

  router.get("/check", (req, res) => {
    res.send("App is working");
  });

  router.post("/send", (req, res) => {
    const { toEmail, subject, content } = req.body;
    mail({ toEmail, subject, content })
      .then(() => res.send("Mail send to: " + toEmail))
      .catch((e) => console.log(e));
  });

  return router;
};

export default routes;
