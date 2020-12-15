import React from "react";
// Material UI
import Grid from "@material-ui/core/Grid";

const Form = ({ children }) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Form;
