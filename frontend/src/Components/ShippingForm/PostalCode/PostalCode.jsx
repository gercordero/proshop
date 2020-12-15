import React from "react";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

/**
 * @param {postalCode} string - The postal code of the User.
 * @param {setPostalCode} function - Function to set the PostalCode state of ShippingPage.
 **/
const PostalCode = ({ postalCode, setPostalCode }) => {
  return (
    <FormControl
      fullWidth
      required
      margin="normal"
      onChange={(e) => setPostalCode(e.target.value)}
    >
      <InputLabel htmlFor="postal-code">Postal Code</InputLabel>
      <Input
        id="postal-code"
        value={postalCode}
        aria-describedby="postal-code-helper-text"
      />
    </FormControl>
  );
};

export default PostalCode;
