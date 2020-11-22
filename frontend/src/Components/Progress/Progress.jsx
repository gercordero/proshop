import React from "react";
// Styled Component
import { StyledProgress } from "./styles/Progress.styles";
// Material UI
import CircularProgress from "@material-ui/core/CircularProgress";

const Progress = () => {
  return (
    <StyledProgress>
      <CircularProgress />
    </StyledProgress>
  );
};

export default Progress;
