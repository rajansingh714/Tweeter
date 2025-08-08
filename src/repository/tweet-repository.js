import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // async get(id) {
  //   try {
  //     const tweet = await Tweet.findById(id);
  //     return tweet;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }

  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id).populate({ path: "comments" });
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(tweetId, data) {
    try {
      const result = await Tweet.findByIdAndUpdate(tweetId, data, {
        new: true,
      });
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // async destroy(id) {
  //   try {
  //     const tweet = await Tweet.findByIdAndDelete(id);
  //     return tweet;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }

  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async find(id) {
    try {
      const tweet = await Tweet.findById(id).populate({ path: "likes" });
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default TweetRepository;
