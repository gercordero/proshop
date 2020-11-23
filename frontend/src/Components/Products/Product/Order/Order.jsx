import React from "react";
// Components
import QuantitySelector from "./QuantitySelector/QuantitySelector";
// Material UI
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const Order = ({
  product,
  quantity,
  setQuantity,
  addToCartHandler,
  ...rest
}) => {
  const { price, countInStock } = product;
  return (
    <>
      {/* Price */}
      <ListItem>
        <ListItemText primary="Price:" />
        <ListItemText primary={price + "$"} />
      </ListItem>
      <Divider component="div" />
      {/* Stock */}
      <ListItem>
        <ListItemText primary="Stock:" />
        <ListItemText
          primary={countInStock > 0 ? "In Stock" : "Out of Stock"}
        />
      </ListItem>
      <Divider component="div" />
      {/* Quantity Selector */}
      {countInStock > 0 && (
        <QuantitySelector
          countInStock={countInStock}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}
      {/* Add to cart button */}
      <ListItem>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={countInStock === 0}
          style={{ width: "100%", fontWeight: "bold" }}
          onClick={addToCartHandler}
        >
          add to cart
        </Button>
      </ListItem>
    </>
  );
};

export default Order;
