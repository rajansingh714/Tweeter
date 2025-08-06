import mongoose from "mongoose";

const hashtagsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);

hashtagsSchema.pre("validate", function (next) {
  console.log(this);
  this.title = this.title.toLowerCase();
  next();
});

const Hashtag = mongoose.model("Hashtag", hashtagsSchema);
export default Hashtag;
