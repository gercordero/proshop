// Express
import { Router } from "express";
// Import users controllers
import { authUSer, getUserProfile } from "../../controllers/userContorller.js";
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

export default router;
