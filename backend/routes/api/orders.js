// Express
import { Router } from "express";
// Import product controllers
import { addOrder, getOrder } from "../../controllers/orderController.js";
// Protect private route
import { protect } from "../../middleware/authMiddleware.js";

// Router instance
const router = Router();

// @route   GET api/orders/test
// @desc    Tests products route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Orders Works" }));

// @route   POST /api/orders
// @desc    Create new order
// @access  Private
router.route("/").post(protect, addOrder);

// @route   GET /api/orders
// @desc    Get order
// @access  Private
router.route("/:id").get(protect, getOrder);

export default router;
