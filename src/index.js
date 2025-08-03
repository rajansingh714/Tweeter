const express = require("express");

const connect = require("./config/serverConfig");
const Comment = require("./models/comments");
const TweetRepository = require("./repository/tweet-repository");

const app = express();

const serverSetup = () => {
  app.listen(3000, async () => {
    console.log(`server is running on ${3000}`);
    await connect();
    console.log("mongoo db  coneect");

    const tweetRepo = new TweetRepository();
    // const getComment = await tweetRepo.getWithComments(
    //   "688d9cf220b01310c144cdd5"
    // );
    // console.log(getComment);
    const result = await tweetRepo.getAll(2, 4);
    console.log(result);
  });
};

serverSetup();
