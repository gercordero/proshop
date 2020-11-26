import React from "react";
// React Router
import { Link as RouterLink } from "react-router-dom";
// Components
import QuantitySelector from "../Products/Product/Order/QuantitySelector/QuantitySelector";
// React icons
import { FaTrash } from "react-icons/fa";
// Styled component
import { GridItem } from "./styles/CartItem.styles";
// Material UI
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

/**
 * @param {object} item - An object that contains all the datails of a product
 * @param {function} dispatch - A function to update redux cart state
 **/
const CartItem = ({ item, dispatch, removeFromCartHandler }) => {
  return (
    <>
      <Grid container spacing={3} style={{ padding: "1rem 0" }}>
        <GridItem item md={1}>
          {/* PRODUCT IMAGE */}
          <img src={item.image} alt={item.name} style={{ width: "100%" }} />
        </GridItem>
        <GridItem item md={2}>
          {/* PRODUCT NAME */}
          <Link component={RouterLink} to={`/product/${item.product}`}>
            <Typography variant="body2">{item.name}</Typography>
          </Link>
        </GridItem>
        <GridItem item md={1}>
          {/* PRODUCT PRICE */}
          <Typography variant="body2" style={{ fontWeight: "bold" }}>
            {"$" +
              Math.round((item.price * item.quantity + Number.EPSILON) * 100) / //Rounds price up ex: $23,54.77789 -> 23,54.78
                100}
          </Typography>
        </GridItem>
        <GridItem item md={3}>
          {/* PRODUCT QUANTITY SELECTOR */}
          <QuantitySelector
            countInStock={item.countInStock}
            quantity={item.quantity}
            dispatch={dispatch}
            id={item.product}
          />
        </GridItem>
        <GridItem item md={1} style={{ marginLeft: "auto" }}>
          {/* REMOVE PRODUCT */}
          <Button onClick={() => removeFromCartHandler(item.product)}>
            <FaTrash />
          </Button>
        </GridItem>
      </Grid>
      <Divider component="div" />
    </>
  );
};

export default CartItem;
