import React from "react";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

const Email = ({ setEmail, error }) => {
  return (
    <FormControl
      fullWidth
      required
      margin="normal"
      error={error === "Invalid email"}
      onChange={(e) => setEmail(e.target.value)}
    >
      <InputLabel htmlFor="email">Email address</InputLabel>
      <Input id="email" aria-describedby="email-helper-text" />
      {error === "Invalid email" && (
        <FormHelperText error id="email-helper-text">
          Wrong email! Are you registered?
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default Email;
