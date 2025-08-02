const Tweet = require('../models/tweet');


class TweetRepository {
        async create (data) {
            try {
                const tweet = await Tweet.create(data);
                return tweet;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }

        async get(id) {
            try {
                const tweet = await Tweet.findById(id);
                return tweet;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }

        async update(tweetId, data) {
            try {
                const result = await Tweet.findByIdAndUpdate(tweetId, data, { new: true });
                return result;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }

        async destroy(id) {
            try {
                const tweet = await Tweet.findByIdAndDelete(id);
                return tweet;
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
}


module.exports = TweetRepository;

