import styled from "styled-components";

export const MenuButton = styled.p`
  color: ${(props) => props.theme.palette.white.main};
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  svg {
    margin-right: 0.3rem;
  }
`;
