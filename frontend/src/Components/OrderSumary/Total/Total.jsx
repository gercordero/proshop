import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
// Styled Components
import { StyledListItemText } from "../styles/OrderSumary.styles";

const Total = ({ total }) => {
  return (
    <ListItem>
      <StyledListItemText
        primary={
          <Typography variant="body1" component="p">
            Total:
          </Typography>
        }
      />
      <StyledListItemText primary={<strong>$ {total}</strong>} />
    </ListItem>
  );
};

export default Total;
