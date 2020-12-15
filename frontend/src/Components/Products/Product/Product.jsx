import React from "react";
import PropTypes from "prop-types";
// Material UI
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
// Components
import Description from "./Description/Description";
import Order from "./Order/Order";

const widthStyle = { width: "100%" };

/**
 * @param {object} product - An object that contains all the product details.
 * @param {integer} quantity - The quantity state from ProductPage.
 * @param {function} setQuantity - The set quantity state fuction from ProductPage.
 * @param {function} addToCartHandler - A function for adding current Product to the Cart.
 **/
const Product = ({ product, quantity, setQuantity, addToCartHandler }) => {
  const { image } = product;
  // Order of appearance in screen size 'lg' is 1 | 2 | 3 (from left to Right)
  // When the screen size is 'sm' then the grid appers in the order 1 -> 3 -> 2 (from left to Right)
  // When the screen size is 'xs' then the grid appers in the order 1->2->3 (from top to bottom)
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6}>
        {/* IMAGE */}
        <img src={image} alt="product" style={widthStyle} />
      </Grid>
      <Box clone order={{ sm: 3, md: 2 }}>
        <Grid item xs={12} sm={12} md={3}>
          {/* DESCRIPTION */}
          <List style={widthStyle}>
            <Description product={product} />
          </List>
        </Grid>
      </Box>
      <Box clone order={{ sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          {/* ORDER */}
          <Paper variant="outlined" square>
            <List style={widthStyle}>
              <Order
                product={product}
                quantity={quantity}
                setQuantity={setQuantity}
                addToCartHandler={addToCartHandler}
                isProductPage={true}
              />
            </List>
          </Paper>
        </Grid>
      </Box>
    </Grid>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
