import React, { useState } from "react";
// Password validation
import { validatePassword } from "../../../validation/register";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

/**
 * @param {setPassword} function - Function to set the Password state of RegisterPage.
 * @param {fieldError} object - An object with booleans that let you know if current field has an error.
 * @param {setFieldError} function - Function to set the Field Error state of Register Form.
 **/
const Password = ({
  setPassword,
  setConfirmPassword,
  isConfirmField,
  fieldError,
  setFieldError,
}) => {
  // Is confirm password field?
  const id = isConfirmField ? "confirm-password" : "password";
  // Error state
  const [error, setError] = useState("");

  // Error handler
  const handleError = (value) => {
    const { message, isValid } = validatePassword(value);
    if (isValid) {
      setError("");
      if (isConfirmField) {
        setFieldError({ ...fieldError, confirmPassword: false });
      } else {
        setFieldError({ ...fieldError, password: false });
      }
    } else {
      setError(message);
      if (isConfirmField) {
        setFieldError({ ...fieldError, confirmPassword: true });
      } else {
        setFieldError({ ...fieldError, password: true });
      }
    }
  };

  // Handle on change event
  const handleChange = (e) => {
    handleError(e.target.value);

    return isConfirmField
      ? setConfirmPassword(e.target.value)
      : setPassword(e.target.value);
  };

  // Handle errors on blur
  const handleBlur = (e) => {
    handleError(e.target.value);
  };

  // Handle errors on focus
  const handleFocus = (e) => {
    if (e.target.value.length > 0) {
      handleError(e.target.value);
    }
  };

  return (
    <FormControl
      fullWidth
      required
      margin="normal"
      onChange={handleChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      error={error.length > 0}
    >
      <InputLabel htmlFor={id}>
        {isConfirmField ? "Confirm Password" : "Password"}
      </InputLabel>
      <Input
        type="password"
        id={id}
        aria-describedby={`${isConfirmField}-helper-text`}
      />
      {error.length > 0 && (
        <FormHelperText error id={`${isConfirmField}-helper-text`}>
          {error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default Password;
