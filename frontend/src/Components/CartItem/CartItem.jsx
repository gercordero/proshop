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
 * @param {object} item - An object that contains all the datails of a product.
 * @param {function} dispatch - A function to update redux cart state.
 * @param {isVariantPage} boolean - A boolean to determinate if CartItem is beeing render from PlaceOrderPage.
 **/
const CartItem = ({ item, removeFromCartHandler, isVariantPage }) => {
  return (
    <>
      <Grid container spacing={3} style={{ padding: "1rem 0" }}>
        {/* PRODUCT IMAGE */}
        <GridItem item xs={6} sm={3} md={isVariantPage ? 1 : 2}>
          <Link component={RouterLink} to={`/product/${item.product}`}>
            <img src={item.image} alt={item.name} style={{ width: "100%" }} />
          </Link>
        </GridItem>

        {/* PRODUCT NAME */}
        <GridItem item xs={6} sm={3} md={isVariantPage ? 4 : 2}>
          <Link component={RouterLink} to={`/product/${item.product}`}>
            <Typography variant="body2">{item.name}</Typography>
          </Link>
        </GridItem>

        {/* PRODUCT PRICE */}
        {!isVariantPage && (
          <GridItem item xs={2} sm={1} md={1}>
            <Typography variant="body2" style={{ fontWeight: "bold" }}>
              {"$" +
                Math.round(
                  (item.price * item.quantity + Number.EPSILON) * 100
                ) / //Rounds price up ex: $23,54.77789 -> 23,54.78
                  100}
            </Typography>
          </GridItem>
        )}

        {/* PRODUCT QUANTITY SELECTOR */}
        {!isVariantPage && (
          <GridItem item xs={7} sm={3} md={3}>
            <QuantitySelector
              countInStock={item.countInStock}
              quantity={item.quantity}
              id={item.product}
              styles={{ marginLeft: "1rem" }}
            />
          </GridItem>
        )}

        {/* REMOVE PRODUCT */}
        {!isVariantPage && (
          <GridItem item xs={3} sm={2} md={1} style={{ marginLeft: "auto" }}>
            <Button onClick={() => removeFromCartHandler(item.product)}>
              <FaTrash />
            </Button>
          </GridItem>
        )}

        {/* PRICE CALCULATE */}
        {isVariantPage && (
          <GridItem item xs={7} sm={3} md={3} style={{ marginLeft: "auto" }}>
            <p>
              <strong>{`${item.quantity} x $${item.price} = $${
                item.quantity * item.price
              }`}</strong>
            </p>
          </GridItem>
        )}
      </Grid>
      <Divider component="div" />
    </>
  );
};

export default CartItem;
