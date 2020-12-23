// Async Handler minddleware
import asyncHandler from "express-async-handler";
// Product model
import Product from "../models/productModel.js";

// @route   GET api/produtcs
// @desc    Get products
// @access  Public
export const getProducts = asyncHandler(async (req, res) => {
  // Pagination config
  const pageSize = 2;
  const page = Number(req.query.pageNumber) || 1;

  // Keyword for filtering products
  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: "i" } }
    : {};

  // Get total amount of products
  const count = await Product.countDocuments({ ...keyword });
  // Get products
  const products = await Product.find({ ...keyword }) //Find products
    .limit(pageSize) // Limit the amount of products we get based on the page size
    .skip(pageSize * (page - 1)); // When we are on page 1 we get the first 10 products but then if we are on page 2 we will also get the first 10 products. So to solve the problem we skip by doing some maths.

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @route   GET api/produtcs/toprated
// @desc    Get top rated products
// @access  Public
export const getTopRatedProducts = asyncHandler(async (req, res) => {
  // Get top rated products
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);
  console.log("HELLO");
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
