import express from "express";
import { connect } from "./config/serverConfig.js";

import TweetService from "./services/tweetService.js";

const app = express();

app.listen(3000, async () => {
  console.log(`server is running on ${3000}`);
  await connect();
  console.log("mongoo db  connected");

  const repo = new TweetService();
  await repo.create({ content: "i am #noobs #cooder" });
});
