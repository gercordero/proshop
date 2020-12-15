import React from "react";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

/**
 * @param {country} string - The country of the User.
 * @param {setCountry} function - Function to set the Country state of ShippingPage.
 **/
const Country = ({ country, setCountry }) => {
  return (
    <FormControl
      fullWidth
      required
      margin="normal"
      onChange={(e) => setCountry(e.target.value)}
    >
      <InputLabel htmlFor="country">Country</InputLabel>
      <Input
        id="country"
        value={country}
        aria-describedby="country-helper-text"
      />
    </FormControl>
  );
};

export default Country;
