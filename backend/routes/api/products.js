// Express
import { Router } from "express";
// Import product controllers
import {
  getProducts,
  getProductById,
  createProductReview,
} from "../../controllers/productController.js";
// Protect private route
import { protect } from "../../middleware/authMiddleware.js";

// Router instance
const router = Router();

// @route   GET api/produtcs/test
// @desc    Tests products route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Products Works" }));

// @route   POST api/produtcs/:id/reviews
// @desc    Create new review
// @access  Private
router.route("/:id/reviews").post(protect, createProductReview);

// @route   GET api/produtcs/:id
// @desc    Get single product
// @access  Public
router.route("/:id").get(getProductById);

// @route   GET api/produtcs
// @desc    Get products
// @access  Public
router.route("/").get(getProducts);

export default router;
