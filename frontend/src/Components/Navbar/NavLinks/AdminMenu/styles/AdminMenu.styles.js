import styled from "styled-components";
import Link from "@material-ui/core/Link";

export const MenuButton = styled.p`
  color: ${(props) => props.theme.palette.white.main};
  text-transform: uppercase;
  margin-right: 2rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  svg {
    margin-right: 0.3rem;
  }
`;

export const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;
