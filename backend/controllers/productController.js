// Async Handler minddleware
import asyncHandler from "express-async-handler";
// Product model
import Product from "../models/productModel.js";

// @route   GET api/produtcs
// @desc    Get products
// @access  Public
export const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: "i" } }
    : {};

  const products = await Product.find({ ...keyword });

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

// @route   POST api/produtcs/:id/reviews
// @desc    Create new review
// @access  Private
export const createProductReview = asyncHandler(async (req, res) => {
  // get data from body
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    // Check if already reviewed by user
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    // if already review send error
    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product alreay reviewed");
    }

    // if not reviewed we create a new review associated with the user
    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };
    console.log(review);

    // push review to product reviews list
    product.reviews.push(review);

    // update number reviews of the product
    product.numReviews = product.reviews.length;
    // calculate rating
    product.rating =
      product.reviews.reduce((acc, review) => review.rating + acc, 0) /
      product.reviews.length;

    // save updated product
    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
