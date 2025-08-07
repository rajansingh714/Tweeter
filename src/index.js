import express from "express";
import bodyParser from "body-parser";
import { connect } from "./config/serverConfig.js";

import apiRoutes from "./routes/index.js";
import { UserRepository, TweetRepository } from "./repository/index.js";
import LikeService from "./services/like-service.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(3000, async () => {
  console.log(`server is running on ${3000}`);
  await connect();
  console.log("mongoo db  connected");

  const userRepo = new UserRepository();
  const tweetRepo = new TweetRepository();
  const tweets = await tweetRepo.getAll(0, 10);
  const users = await userRepo.get();
  // const result = await userRepo.create({
  //   email: "krishna@gmail.com",
  //   password: 12345,
  //   name: "Krishna",
  // });

  const likeService = new LikeService();
  await likeService.toggleLike(tweets[0].id, "Tweet", users.id);
});
