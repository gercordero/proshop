import React from "react";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const Password = ({ setPassword, setConfirmPassword, isConfirmField }) => {
  // Is confirm password field?
  const id = isConfirmField ? "confirm-password" : "password";

  // Handle on change event
  const handleChange = (e) => {
    if (isConfirmField) {
      setConfirmPassword(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <FormControl fullWidth margin="normal" onChange={handleChange}>
      <InputLabel htmlFor={id}>
        {isConfirmField ? "Confirm Password" : "Password"}
      </InputLabel>
      <Input type="password" id={id} />
    </FormControl>
  );
};

export default Password;
