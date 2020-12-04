import React from "react";
// Styled Component
import { StyledProgress } from "./styles/Progress.styles";
// Material UI
import CircularProgress from "@material-ui/core/CircularProgress";

const Progress = ({ style, className, ...rest }) => {
  return (
    <StyledProgress style={style} className={className}>
      <CircularProgress />
    </StyledProgress>
  );
};

export default Progress;
