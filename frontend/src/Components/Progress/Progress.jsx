import React from "react";
// Styled Component
import { StyledProgress } from "./styles/Progress.styles";
// Material UI
import CircularProgress from "@material-ui/core/CircularProgress";

/**
 * @param {style} object - An object to style main component.
 * @param {className} string - An object to add className to main component.
 **/
const Progress = ({ style, className }) => {
  return (
    <StyledProgress
      style={{ marginBottom: "0", ...style }}
      className={className}
    >
      <CircularProgress />
    </StyledProgress>
  );
};

export default Progress;
