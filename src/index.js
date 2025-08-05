const express = require("express");

const connect = require("./config/serverConfig");
const Tweet = require("./models/tweet");

const Hashtagrepository = require("./repository/hashtag-repository");

console.log(typeof Hashtagrepository);

const app = express();

const serverSetup = () => {
  app.listen(3000, async () => {
    console.log(`server is running on ${3000}`);
    await connect();
    console.log("mongoo db  connected");

    const repo = new Hashtagrepository();

    await repo.bulkCreate([
      {
        title: "Trend",
        tweets: [],
      },
      {
        title: "Exicted",
        tweets: [],
      },
      {
        title: "JS",
        tweets: [],
      },
      {
        title: "Fun",
        tweets: [],
      },
      {
        title: "Career",
        tweet: [],
      },
    ]);
  });
};

serverSetup();
