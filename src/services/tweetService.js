const TweetRepository = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9]+/g); // this regex extracts hashtags
    tags = tags.map((tag) => tag.substring(1));
    console.log(tags);
    const tweet = await this.tweetRepository.create(data);
    // todo create hashtag and add here
    /**
     * 1. bulcreate in mongoose
     * 2. filter title of hashtag based on multiple tags
     * 3. How to add tweet id inside all the hashtags
     */

    return tweet;
  }
}

module.exports = TweetService;
