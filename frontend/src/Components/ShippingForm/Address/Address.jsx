import React from "react";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

/**
 * @param {address} string - The address of the User.
 * @param {setAddress} function - Function to set the Address state of ShippingPage.
 **/
const Address = ({ address, setAddress }) => {
  return (
    <FormControl
      fullWidth
      required
      margin="normal"
      onChange={(e) => setAddress(e.target.value)}
    >
      <InputLabel htmlFor="address">Address</InputLabel>
      <Input
        id="address"
        value={address}
        aria-describedby="address-helper-text"
      />
    </FormControl>
  );
};

export default Address;
