import React, { useState } from "react";
// Material UI
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
// React Icons
import { FaSearch } from "react-icons/fa";
// Styled components
import { StyledForm, StyledTextField } from "./styles/SearchBox.styles";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <FormControl required onChange={(e) => setKeyword(e.target.value)}>
        <StyledTextField
          id="outlined-required"
          variant="outlined"
          color="secondary"
          placeholder="Search"
          type="search"
        />
      </FormControl>
      <Button type="submit" variant="contained" color="secondary">
        <FaSearch />
      </Button>
    </StyledForm>
  );
};

export default SearchBox;
