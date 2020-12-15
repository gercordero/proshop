import React from "react";
// Components
import Shipping from "./Shipping/Shipping";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import OrderedItems from "./OrderedItems/OrderedItems";
// Material UI
import Divider from "@material-ui/core/Divider";

const InfoPanel = ({ shippingAddress, paymentMethod }) => {
  return (
    <>
      {/* Shipping */}
      <Shipping shippingAddress={shippingAddress} />
      <Divider component="div" style={{ width: "100%" }} />

      {/* Payment Method */}
      <PaymentMethod paymentMethod={paymentMethod} />
      <Divider component="div" style={{ width: "100%" }} />

      {/* Ordered items */}
      <OrderedItems />
    </>
  );
};

export default InfoPanel;
