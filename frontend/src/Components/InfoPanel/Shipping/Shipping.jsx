import React from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";

const Shipping = ({
  shippingAddress,
  name,
  email,
  isOrderPage,
  isDelivered,
  deliveredAt,
}) => {
  const deliveredDay = new Date(deliveredAt);

  return (
    <Grid item md={12}>
      <Typography
        variant="h4"
        component="h2"
        style={{ marginBottom: "1.5rem" }}
      >
        Shipping
      </Typography>
      {name && (
        <Typography variant="body1" component="p" gutterBottom>
          <strong>Name: </strong>
          {name}
        </Typography>
      )}
      {email && (
        <Typography variant="body1" component="p" gutterBottom>
          <strong>Email: </strong>
          {email}
        </Typography>
      )}
      <Typography variant="body1" component="p" gutterBottom>
        <strong>Address: </strong>
        {`${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.postalCode}, ${shippingAddress.country}`}
      </Typography>
      {isOrderPage ? (
        isDelivered ? (
          <Alert severity="info">
            Delivered on {deliveredDay.toDateString()}
          </Alert>
        ) : (
          <Alert severity="error">
            Not delivered yet. We will let you know when your order has been
            delivered.
          </Alert>
        )
      ) : (
        ""
      )}
    </Grid>
  );
};

export default Shipping;
