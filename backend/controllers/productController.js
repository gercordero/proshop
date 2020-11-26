// Async Handler minddleware
import asyncHandler from "express-async-handler";
// DATA
import Product from "../models/productModel.js";

// @route   GET api/produtcs
// @desc    Get products
// @access  Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// @route   GET api/produtcs/:id
// @desc    Get single product
// @access  Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
