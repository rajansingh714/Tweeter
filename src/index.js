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

    const createTweet = await tweetRepo.create({
      content: "this is first hooks ",
      email: "xyz@gmial.com",
    });
    console.log(createTweet);
  });
};

serverSetup();
