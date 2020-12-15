import React from "react";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

/**
 * @param {setPassword} function - Function to set the Password state of ProfilePage.
 * @param {setConfirmPassword} function - Function to set the ConfirmPassword state of ProfilePage.
 * @param {boolean} isConfirmField - A boolean to determinate if this component is a "confirm password" field.
 **/
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
