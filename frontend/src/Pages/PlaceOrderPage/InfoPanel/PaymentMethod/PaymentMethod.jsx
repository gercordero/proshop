import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const PaymentMethod = ({ paymentMethod }) => {
  return (
    <Grid item md={12}>
      <Typography
        variant="h4"
        component="h2"
        style={{ marginBottom: "1.5rem" }}
      >
        Payment method
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <strong>Method: </strong>
        {paymentMethod}
      </Typography>
    </Grid>
  );
};

export default PaymentMethod;
