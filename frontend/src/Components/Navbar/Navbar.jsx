import React, { useState } from "react";
// React Router
import { Link as RouterLink } from "react-router-dom";
// Meterial UI
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { FaBars } from "react-icons/fa";
// Styles
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
