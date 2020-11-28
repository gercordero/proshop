import jwt from "jsonwebtoken";
// Async Handler minddleware
import asyncHandler from "express-async-handler";
// User model
import User from "../models/userModel.js";

export const protect = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  let token;

  if (authHeader && authHeader.startsWith("Bearer")) {
    try {
      // Split header token ex : "Bearer"[0] token[1]
      token = authHeader.split(" ")[1];
      // Decode jwt token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // Attach decoded token to req.user so we can use it from any of our protected routes
      req.user = await User.findById(decoded.id).select("-password"); //Take password out beacuse isn't necesary

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorize, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorize, no token");
  }
});
