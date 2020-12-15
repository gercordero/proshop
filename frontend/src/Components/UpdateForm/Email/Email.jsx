import React from "react";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

/**
 * @param {email} string - The email of the User.
 * @param {setEmail} function - Function to set the Email state of ProfilePage.
 **/
const Email = ({ setEmail, email }) => {
  // Handle on change event
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <FormControl fullWidth margin="normal" onChange={handleChange}>
      <InputLabel htmlFor="email">Email address</InputLabel>
      <Input id="email" value={email} />
    </FormControl>
  );
};

export default Email;
