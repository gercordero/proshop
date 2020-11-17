const express = require("express");
const router = express.Router();
// DATA
const products = require("../../data/products");

// @route   GET api/produtcs/test
// @desc    Tests products route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Products Works" }));

// @route   GET api/produtcs
// @desc    Get products
// @access  Public
router.get("/", (req, res) => {
  res.json(products);
});

// @route   GET api/produtcs/:id
// @desc    Get single product
// @access  Public
router.get("/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

module.exports = router;
