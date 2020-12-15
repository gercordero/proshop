import React, { useState } from "react";
// Name validation
import { validateName } from "../../../validation/register";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

/**
 * @param {setName} function - Function to set the Name state of RegisterPage.
 * @param {fieldError} object - An object with booleans that let you know if current field has an error.
 * @param {setFieldError} function - Function to set the Field Error state of Register Form.
 **/
const Name = ({ setName, fieldError, setFieldError }) => {
  // Error state
  const [error, setError] = useState("");

  // Error handler
  const handleError = (value) => {
    const { message, isValid } = validateName(value);
    if (isValid) {
      setError("");
      setFieldError({ ...fieldError, name: false });
    } else {
      setError(message);
      setFieldError({ ...fieldError, name: true });
    }
  };

  // Handle on change event
  const handleChange = (e) => {
    handleError(e.target.value);
    setName(e.target.value);
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
      <InputLabel htmlFor="name">Name</InputLabel>
      <Input id="name" aria-describedby="name-helper-text" />
      {error.length > 0 && (
        <FormHelperText error id="name-helper-text">
          {error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default Name;
