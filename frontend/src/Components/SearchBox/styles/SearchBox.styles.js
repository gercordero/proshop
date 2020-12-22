import styled from "styled-components";
// Material UI
import TextField from "@material-ui/core/TextField";

export const StyledForm = styled.form`
  display: flex;
  ${(props) => props.theme.breakpoints.up("sm")} {
    margin-right: 1rem;
    margin-left: auto;
  }
`;

export const StyledTextField = styled(TextField)`
  margin-right: 0.2rem;
  & > div {
    background-color: white;
  }
`;
