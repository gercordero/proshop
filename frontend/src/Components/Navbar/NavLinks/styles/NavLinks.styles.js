import styled from "styled-components";
import Dropdown from "react-dropdown";

export const StyledDropdown = styled(Dropdown)`
  .Dropdown-control {
    background-color: unset;
    border: none;
    color: ${(props) => props.theme.palette.white.main};
    text-transform: uppercase;
    padding-right: 30px;
  }
`;
