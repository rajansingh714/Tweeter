import CommentService from "../services/comment-service.js";
import TweetService from "../services/tweetService.js";

const commentService = new CommentService();
const tweetService = new TweetService();

export const createComment = async (req, res) => {
  try {
    // console.log(
    //   req.body.content,
    //   req.query.modelId,
    //   req.query.modelType,
    //   req.body.userId
    // );
    const response = await commentService.create(
      req.query.modelId,
      req.query.modelType,
      req.body.userId,
      req.body.content
    );
    // console.log("???????????", response);
    return res.status(200).json({
      success: true,
      message: "SuccessFully created a new comment",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "something went wrong",
      data: {},
      err: error,
    });
  }
};
