import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const OrderedItems = () => {
  return (
    <Grid item md={12}>
      <Typography variant="h4" component="h2" style={{ marginBottom: "1rem" }}>
        Ordered items
      </Typography>
    </Grid>
  );
};

export default OrderedItems;
