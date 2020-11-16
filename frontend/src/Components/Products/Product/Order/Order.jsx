import React from "react";
// Material UI
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const Order = ({ product, ...rest }) => {
  const { price, countInStock } = product;
  return (
    <>
      <ListItem>
        <ListItemText primary="Price:" />
        <ListItemText primary={price + "$"} />
      </ListItem>
      <Divider component="div" />
      <ListItem>
        <ListItemText primary="Stock:" />
        <ListItemText
          primary={countInStock > 0 ? "In Stock" : "Out of Stock"}
        />
      </ListItem>
      <Divider component="div" />
      <ListItem>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={countInStock === 0}
          style={{ width: "100%", fontWeight: "bold" }}
        >
          add to cart
        </Button>
      </ListItem>
    </>
  );
};

export default Order;
