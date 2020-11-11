import React from "react";
import { StyledContainer } from "./styles/Footer.styles";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <footer>
      <StyledContainer>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          Copyright &copy; {new Date().getFullYear()} Proshop
        </Typography>
      </StyledContainer>
    </footer>
  );
};

export default Footer;
