// Express
import { Router } from "express";
// Import users controllers
import {
  authUSer,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../../controllers/userContorller.js";
// Protect private route
import { protect } from "../../middleware/authMiddleware.js";

// Router instance
const router = Router();

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => {
  res.status(200).json({ msg: "Users works" });
});

// @route   POST api/users/login
// @desc    Auth user & get token
// @access  Public
router.post("/login", authUSer);

// @route   GET api/users/profile
// @desc    Get user profile
// @access  Private
router.route("/profile").get(protect, getUserProfile);

// @route   PUT api/users/profile
// @desc    Update User Profile
// @access  Private
router.route("/profile").put(protect, updateUserProfile);

// @route   POST api/users
// @desc    Register a new user
// @access  Public
router.post("/", registerUser);

export default router;
