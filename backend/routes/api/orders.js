// Express
import { Router } from "express";
// Import product controllers
import {
  addOrder,
  getOrder,
  updateOrderToPaid,
  getMyOrders,
  getAllOrders,
  updateOrderToDelivered,
} from "../../controllers/orderController.js";
// Protect private route
import { protect, isAdmin } from "../../middleware/authMiddleware.js";

// Router instance
const router = Router();

// @route   GET api/orders/test
// @desc    Tests products route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Orders Works" }));

// @route   PUT /api/orders/myorders
// @desc    Get logged in user orders
// @access  Private
router.route("/myorders").get(protect, getMyOrders);

// @route   GET /api/orders
// @desc    Get order
// @access  Private
router.route("/:id").get(protect, getOrder);

// @route   PUT /api/orders/:id/deliver
// @desc    Update order to delivered
// @access  Private/Admin
router.route("/:id/deliver").put(protect, isAdmin, updateOrderToDelivered);

// @route   PUT /api/orders/:id/pay
// @desc    Update order to paid
// @access  Private
router.route("/:id/pay").put(protect, updateOrderToPaid);

// @route   GET /api/orders
// @desc    Get all orders.
// @access  Private/Admin
router.route("/").get(protect, isAdmin, getAllOrders);

// @route   POST /api/orders
// @desc    Create new order
// @access  Private
router.route("/").post(protect, addOrder);

export default router;
