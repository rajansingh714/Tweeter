import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    onModel: {},
    likeable: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "onModel",
    },
  },
  { timestamps: true }
);

const like = mongoose.model("Like", likeSchema);
export default like;
