class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAll(id) {
    try {
      const result = await this.model.find({});
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(data, id) {
    try {
      const result = await this.mode.findByIdAndUpdate(data, id, { new: true });
      return result;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default CrudRepository;
