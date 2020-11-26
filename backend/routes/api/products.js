// Express
import express, { Router } from "express";
// Import product controllers
import {
  getProducts,
  getProductById,
} from "../../controllers/productController.js";

// Router instance
const router = Router();

// @route   GET api/produtcs/test
// @desc    Tests products route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Products Works" }));

// @route   GET api/produtcs
// @desc    Get products
// @access  Public
router.route("/").get(getProducts);

// @route   GET api/produtcs/:id
// @desc    Get single product
// @access  Public
router.route("/:id").get(getProductById);

export default router;
