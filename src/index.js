import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv-safe";
import routes from "./routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/mail", routes());

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
