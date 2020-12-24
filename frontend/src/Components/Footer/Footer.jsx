import React from "react";
import { StyledContainer, StyledFooter } from "./styles/Footer.styles";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Copyright &copy; {new Date().getFullYear()} Proshop
        </Typography>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
