import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
// Styled Components
import { StyledListItemText } from "../styles/OrderSumary.styles";

const Taxes = ({ taxPrice }) => {
  return (
    <ListItem>
      <StyledListItemText
        primary={
          <Typography variant="body1" component="p">
            Taxes (25%):
          </Typography>
        }
      />
      <StyledListItemText primary={<strong>$ {taxPrice}</strong>} />
    </ListItem>
  );
};

export default Taxes;
