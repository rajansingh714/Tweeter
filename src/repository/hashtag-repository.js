const Hashtag = require("../models/hashtags");

class HashtagRepository {
  async create(data) {
    try {
      const create = await Hashtag.create(data);
      return create;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async bulkCreate(data) {
    try {
      const create = await Hashtag.insertMany(data);
      return create;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async get(id) {
    try {
      const result = await Hashtag.findById(id);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await Hashtag.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = HashtagRepository;
