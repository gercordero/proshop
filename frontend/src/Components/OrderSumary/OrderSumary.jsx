import React from "react";
// Components
import { Progress } from "../";
import { Items, Shipping, Taxes, Total } from "./OrderSumaryComponents";
// Material UI
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

/**
 * @param {cartItems} array - An array of product items.
 * @param {checkOutHandler} function - Function to execute on button "place order" click.
 * @param {loading} boolean - A boolean to know if an async request is going on.
 * @param {isVariantPage} boolean - A boolean to determinate if CartItem is beeing render from PlaceOrderPage.
 **/
const OrderSummary = ({
  cartItems,
  checkOutHandler,
  loading,
  isVariantPage,
}) => {
  // Variables initialization
  let totalQuantity = 0;
  let itemsPrice = 0;
  // Iterate over cartItems to calculate totals
  cartItems.forEach((element) => {
    totalQuantity += element.quantity;
    itemsPrice += element.price * element.quantity;
  });

  // Add decimals fuction
  const addDecimals = (num) => {
    return num.toFixed(2);
  };

  // Rounds price up ex: $23,54.77789 -> 23,54.78
  const roundUp = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  };

  // Total price round up
  itemsPrice = roundUp(itemsPrice);

  // Calculate shipping
  let shippingPrice = itemsPrice > 50 ? 5 : 10;

  // Calculate taxes
  let taxPrice = roundUp(Number(0.25 * itemsPrice));

  // Calculate total price
  const totalPrice = roundUp(itemsPrice + shippingPrice + taxPrice);

  return (
    <Paper variant="outlined" square>
      <List style={{ width: "100%" }}>
        {/* ITEMS */}
        <Items
          totalQuantity={totalQuantity}
          itemsPrice={addDecimals(itemsPrice)}
        />
        <Divider />
        {/* Shipping */}
        <Shipping shippingPrice={addDecimals(shippingPrice)} />
        <Divider />
        {/* Taxes */}
        <Taxes taxPrice={addDecimals(taxPrice)} />
        <Divider />
        {/* Total */}
        <Total total={addDecimals(totalPrice)} />
        {!isVariantPage && (
          <>
            <Divider />
            <ListItem>
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ width: "100%", fontWeight: "bold" }}
                disabled={loading}
                onClick={() =>
                  checkOutHandler(
                    itemsPrice,
                    shippingPrice,
                    taxPrice,
                    totalPrice
                  )
                }
              >
                {loading ? <Progress /> : "Place Order"}
              </Button>
            </ListItem>
          </>
        )}
      </List>
    </Paper>
  );
};

//

export default OrderSummary;
