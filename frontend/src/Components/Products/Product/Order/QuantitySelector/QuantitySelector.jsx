import React from "react";
// Redux
import { useDispatch } from "react-redux";
// Redux Action
import { addToCart } from "../../../../../actions/cartActions";
// Material UI
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Divider from "@material-ui/core/Divider";

/**
 * @param {integer} countInStock - The product stock amount.
 * @param {integer} quantity - The quantity state from ProductPage OR The quantity state from CartPage.
 * @param {function} setQuantity - The set quantity state fuction from ProductPage.
 * @param {function} dispatch - Function for updating CartPage state.
 * @param {function} id - The id of the product that is needed for dispatch to work properly is used only when Quantity selector is call from CartPage.
 * @param {object} styles - Styles that comes from CartItem. It's for responsive reasons
 * @param {boolean} isProductPage - A boolean to determinate if page where Order is been rendered from is Product Page
 * @param {object} rest - the rest of the props if any.
 **/
const QuantitySelector = ({
  countInStock,
  quantity,
  setQuantity,
  id,
  styles,
  isProductPage,
  ...rest
}) => {
  // Redux state
  const dispatch = useDispatch();

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText primary="Quantity:" />
        <FormControl
          required
          style={styles ? styles : { flex: "1 1 auto", marginLeft: "-2rem" }}
        >
          <Select
            style={{ width: "3rem" }}
            id="quantity-select"
            value={quantity}
            onChange={(e) => {
              !isProductPage
                ? dispatch(addToCart(id, e.target.value))
                : setQuantity(e.target.value);
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
      {setQuantity && <Divider component="div" />}
    </>
  );
};

export default QuantitySelector;
