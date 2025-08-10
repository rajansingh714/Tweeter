import express from "express";
import bodyParser from "body-parser";
import { connect } from "./config/serverConfig.js";

import apiRoutes from "./routes/index.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(3000, async () => {
  console.log(`server is running on ${3000}`);
  await connect();
  console.log("mongoo db  connected");
});
