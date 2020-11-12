import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { FaBars } from "react-icons/fa";
import {
  StyledNav,
  StyledContainer,
  StyledHeader,
  StyledNavLinks,
  ToggleBtnContainer,
  ToggleBtn,
} from "./styles/Navbar.styles";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
      <StyledContainer>
        <StyledHeader>
          <Link component={RouterLink} to="/">
            <Typography variant="h5" component="h1">
              proshop
            </Typography>
          </Link>
        </StyledHeader>
        <ToggleBtnContainer>
          <ToggleBtn type="button" onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </ToggleBtn>
        </ToggleBtnContainer>
        <StyledNavLinks isOpen={isOpen} />
      </StyledContainer>
    </StyledNav>
  );
};

export default Navbar;
