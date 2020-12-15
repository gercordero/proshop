import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
// Styled Components
import { StyledListItemText } from "../styles/OrderSumary.styles";

const Shipping = ({ shippingPrice, addDecimals }) => {
  return (
    <ListItem>
      <StyledListItemText
        primary={
          <Typography variant="body1" component="p">
            Shipping:
          </Typography>
        }
      />
      <StyledListItemText
        primary={<strong>$ {addDecimals(shippingPrice)}</strong>}
      />
    </ListItem>
  );
};

export default Shipping;
