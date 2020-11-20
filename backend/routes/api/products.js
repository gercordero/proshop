// Express
import express, { Router } from "express";
// Async Handler minddleware
import asyncHandler from "express-async-handler";
// DATA
import Product from "../../models/productModel.js";

// Router instance
const router = Router();

// @route   GET api/produtcs/test
// @desc    Tests products route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Products Works" }));

// @route   GET api/produtcs
// @desc    Get products
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @route   GET api/produtcs/:id
// @desc    Get single product
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
