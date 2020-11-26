import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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

  //Rounds price up ex: $23,54.77789 -> 23,54.78
  totalPrice = Math.round((totalPrice + Number.EPSILON) * 100) / 100;

  return (
    <Paper variant="outlined" square>
      <List style={{ width: "100%" }}>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="h6">
                Subtotal ({totalQuantity} items): <strong>${totalPrice}</strong>
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "100%", fontWeight: "bold" }}
            onClick={checkOutHandler}
          >
            proceed to checkout
          </Button>
        </ListItem>
      </List>
    </Paper>
  );
};

export default SubTotal;
