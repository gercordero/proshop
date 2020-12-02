import styled from "styled-components";
import Container from "@material-ui/core/Container";
import NavLinks from "../NavLinks/NavLinks";

export const StyledNav = styled.nav`
  width: 100vw;
  z-index: 100;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.palette.primary.main};
`;

export const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const StyledHeader = styled.header`
  grid-column: 1/2;
  display: flex;
  align-items: center;
  & > a > h1 {
    color: ${(props) => props.theme.palette.white.main};
    text-transform: uppercase;
  }
`;

export const StyledNavLinks = styled(NavLinks)`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  grid-column: 1/3;
  flex-direction: column;
  padding: 0;

  & > li > svg {
    align-self: center;
    color: ${(props) => props.theme.palette.white.main};
  }

  & > li {
    margin-top: 1rem;
  }

  & > li > a {
    color: ${(props) => props.theme.palette.white.main};
    text-transform: uppercase;

    & svg {
      margin-right: 0.3rem;
    }
  }

  ${(props) => props.theme.breakpoints.up("sm")} {
    grid-column: 2/3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    & > li {
      margin: 0 2rem;
    }
  }
`;

export const ToggleBtnContainer = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${(props) => props.theme.breakpoints.up("sm")} {
    display: none;
  }
`;

export const ToggleBtn = styled.div`
  cursor: pointer;

  & > svg {
    color: ${(props) => props.theme.palette.white.main};
    font-size: 1.5rem;
  }
`;
