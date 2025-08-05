const express = require("express");

const connect = require("./config/serverConfig");
const Tweet = require("./models/tweet");

const { TweetRepository } = require("./repository/index");
const TweetService = require("./services/tweetService");

const app = express();

const serverSetup = () => {
  app.listen(3000, async () => {
    console.log(`server is running on ${3000}`);
    await connect();
    console.log("mongoo db  connected");

    const repo = new TweetService();
    const tweet = await repo.create({
      content: "i am #exicted ang going to #coding , #newJob, #fullMasti ",
    });
  });
};

serverSetup();
