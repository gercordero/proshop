import React from "react";
// Components
import { Items, Shipping, Taxes, Total } from "./OrderSumaryComponents";
// Material UI
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const SubTotal = ({ cartItems, checkOutHandler, ...rest }) => {
  // Variables initialization
  let totalQuantity = 0;
  let totalPrice = 0;
  // Iterate over cartItems to calculate totals
  cartItems.forEach((element) => {
    totalQuantity += element.quantity;
    totalPrice += element.price * element.quantity;
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
  totalPrice = roundUp(totalPrice);

  // Calculate shipping
  let shippingPrice = totalPrice > 50 ? 5 : 10;

  // Calculate taxes
  let taxPrice = roundUp(Number(0.25 * totalPrice));

  return (
    <Paper variant="outlined" square>
      <List style={{ width: "100%" }}>
        {/* ITEMS */}
        <Items
          totalQuantity={totalQuantity}
          totalPrice={totalPrice}
          addDecimals={addDecimals}
        />
        <Divider />
        {/* Shipping */}
        <Shipping shippingPrice={shippingPrice} addDecimals={addDecimals} />
        <Divider />
        {/* Taxes */}
        <Taxes taxPrice={taxPrice} addDecimals={addDecimals} />
        <Divider />
        {/* Total */}
        <Total
          total={addDecimals(roundUp(totalPrice + shippingPrice + taxPrice))}
        />
        <Divider />
        <ListItem>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "100%", fontWeight: "bold" }}
            onClick={checkOutHandler}
          >
            place order
          </Button>
        </ListItem>
      </List>
    </Paper>
  );
};

//

export default SubTotal;
