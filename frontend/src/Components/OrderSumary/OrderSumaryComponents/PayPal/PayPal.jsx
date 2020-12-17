import React from "react";
// Components
import { Progress } from "../../../";
// Material UI
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
// Paypal Button
import { PayPalButton } from "react-paypal-button-v2";

const PayPal = ({
  loadingPay,
  sdkReady,
  orderTotalPrice,
  handleSuccesPayment,
}) => {
  return (
    <>
      <Divider />
      <ListItem style={{ display: "block" }}>
        {loadingPay && <Progress />}
        {!sdkReady ? (
          <Progress />
        ) : (
          <PayPalButton
            amount={orderTotalPrice}
            onSuccess={handleSuccesPayment}
          />
        )}
      </ListItem>
    </>
  );
};

export default PayPal;
