import React from "react";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const Name = ({ setName, name }) => {
  // Handle on change event
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <FormControl fullWidth required margin="normal" onChange={handleChange}>
      <InputLabel htmlFor="name">Name</InputLabel>
      <Input id="name" value={name} />
    </FormControl>
  );
};

export default Name;
