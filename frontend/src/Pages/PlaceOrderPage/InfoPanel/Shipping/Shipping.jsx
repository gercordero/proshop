import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Shipping = ({ shippingAddress }) => {
  return (
    <Grid item md={12}>
      <Typography
        variant="h4"
        component="h2"
        style={{ marginBottom: "1.5rem" }}
      >
        Shipping
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <strong>Address: </strong>
        {`${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.postalCode}, ${shippingAddress.country}`}
      </Typography>
    </Grid>
  );
};

export default Shipping;
