const express = require("express");

const connect = require("./config/serverConfig");
const Comment = require("./models/comments");
const Tweet = require("./models/tweet");
const TweetRepository = require("./repository/tweet-repository");

const app = express();

const serverSetup = () => {
  app.listen(3000, async () => {
    console.log(`server is running on ${3000}`);
    await connect();
    console.log("mongoo db  connect");

    const tweetRepo = new TweetRepository();

    const result = await tweetRepo.getAll(2, 4);
    // console.log(result);
    // const tweet = result[0].toJSON();
    // console.log(tweet);
    console.log(result[0].contentWithEmail);
  });
};

serverSetup();
