import React from "react";
// Material UI
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";

const QuantitySelector = ({ countInStock, quantity, setQuantity, ...rest }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText primary="Quantity:" />
        <FormControl required style={{ flex: "1 1 auto", marginLeft: "-2rem" }}>
          <Select
            id="quantity-select"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(countInStock).keys()].map((i) => (
              <MenuItem key={i + 1} value={i + 1}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ListItem>
      <Divider component="div" />
    </>
  );
};

export default QuantitySelector;
