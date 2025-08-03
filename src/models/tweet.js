const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      require: true,
    },
    userEmail: {
      type: String,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

tweetSchema.virtual("contentWithEmail").get(function process() {
  return `${this.content} \n Created by: ${this.userEmail}`;
});

// Pre-validate hook - this will work with Tweet.create()
tweetSchema.pre("validate", function (next) {
  console.log("pre validate hook triggered");
  next();
});


const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
