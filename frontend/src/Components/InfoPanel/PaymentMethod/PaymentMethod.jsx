import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";

const PaymentMethod = ({ paymentMethod, isOrderPage, isPaid, paidAt }) => {
  const paidDate = new Date(paidAt);

  return (
    <Grid item xs={12} sm={12} md={12}>
      <Typography
        variant="h4"
        component="h2"
        style={{ marginBottom: "1.5rem", marginTop: "2rem" }}
      >
        Payment method
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        <strong>Method: </strong>
        {paymentMethod}
      </Typography>
      {isOrderPage ? (
        isPaid ? (
          <Alert severity="info">Paid on {paidDate.toDateString()}</Alert>
        ) : (
          <Alert severity="error">Not Paid</Alert>
        )
      ) : (
        ""
      )}
    </Grid>
  );
};

export default PaymentMethod;
