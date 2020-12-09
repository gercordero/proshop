import React from "react";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

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
