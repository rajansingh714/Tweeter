import { LikeRepository, TweetRepository } from "../repository/index.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(modelId, modelType, userId) {
    // /api/v1/likes/toggle?id=modelid&type=Tweet
    if (modelType == "Tweet") {
      var likeable = await this.tweetRepository.find(modelId);
      // console.log(">>>>>>>>>>>", likeable);
    } else if (modelType == "Comment") {
      // TODO
    } else {
      throw new Error("unknown model type");
    }
    const existsLike = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });
    // console.log("existsssssssssss", existsLike);
    if (existsLike) {
      likeable.likes.pull(existsLike.id);
      await likeable.save();
      // await existsLike.remove();
      await this.likeRepository.destroy(existsLike._id);
      var isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      var isAdded = true;
    }
    return isAdded;
  }
}

export default LikeService;
