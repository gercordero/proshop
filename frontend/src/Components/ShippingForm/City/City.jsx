import React from "react";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const City = ({ city, setCity }) => {
  return (
    <FormControl
      fullWidth
      required
      margin="normal"
      onChange={(e) => setCity(e.target.value)}
    >
      <InputLabel htmlFor="city">City</InputLabel>
      <Input id="city" value={city} aria-describedby="city-helper-text" />
    </FormControl>
  );
};

export default City;
