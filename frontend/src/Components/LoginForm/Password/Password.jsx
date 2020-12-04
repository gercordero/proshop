import React from "react";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

const Password = ({ setPassword, error }) => {
  return (
    <FormControl
      fullWidth
      required
      margin="normal"
      error={error === "Invalid password"}
      onChange={(e) => setPassword(e.target.value)}
    >
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input
        type="password"
        id="password"
        aria-describedby="password-helper-text"
      />
      {error === "Invalid password" && (
        <FormHelperText error id="email-helper-text">
          You have entered a wrong password!
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default Password;
