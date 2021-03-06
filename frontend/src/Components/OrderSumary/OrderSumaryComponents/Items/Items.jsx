import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
// Styled Components
import { StyledListItemText } from "../styles/OrderSumary.styles";

const Items = ({ totalQuantity, itemsPrice }) => {
  return (
    <ListItem>
      <StyledListItemText
        primary={
          <Typography variant="body1" component="p">
            (<strong>{totalQuantity}</strong>) Items:
          </Typography>
        }
      />
      <StyledListItemText primary={<strong>$ {itemsPrice}</strong>} />
    </ListItem>
  );
};

export default Items;
