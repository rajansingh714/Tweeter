import UserService from "../services/user-service.js";
import User from "../models/user.js";

const userService = new UserService();

export const signUp = async (req, res) => {
  try {
    const response = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.status(200).json({
      success: true,
      data: response,
      message: "successFully signUp",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: "successFully not signup",
      err: error,
    });
  }
};

export const logIn = async (req, res) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);
    if (!user) {
      return res.status(401).json({
        message: "no user found",
        success: false,
      });
    }
    if (!user.comparePassword(req.body.password)) {
      return res.status(401).json({
        message: "incorrect password",
        success: false,
      });
    }
    const token = user.genJWT();
    return res.status(200).json({
      success: true,
      message: "SuccessFully logged in",
      data: token,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: err,
    });
  }
};
