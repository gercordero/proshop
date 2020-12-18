import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const OrderedItems = () => {
  return (
    <Grid item xs={12} sm={12} md={12}>
      <Typography
        variant="h4"
        component="h2"
        style={{ marginBottom: "1rem", marginTop: "2rem" }}
      >
        Ordered items
      </Typography>
    </Grid>
  );
};

export default OrderedItems;
