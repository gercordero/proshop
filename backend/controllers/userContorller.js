// Async Handler minddleware
import asyncHandler from "express-async-handler";
// User model
import User from "../models/userModel.js";
// Token generator
import { generateToken } from "../utils/generateToken.js";

// @route   POST api/users/login
// @desc    Auth user & get token
// @access  Public
export const authUSer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    if (await user.matchPassword(password)) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid password");
    }
  } else {
    res.status(401);
    throw new Error("Invalid email");
  }
});

// @route   GET api/users/profile
// @desc    Get user profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    res
      .status(200)
      .json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
  } else {
    res.status(404).json({ msg: "User not found" });
  }
});
