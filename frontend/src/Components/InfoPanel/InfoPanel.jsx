import React from "react";
// Components
import Shipping from "./Shipping/Shipping";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import OrderedItems from "./OrderedItems/OrderedItems";

const InfoPanel = ({
  shippingAddress,
  paymentMethod,
  name,
  email,
  isOrderPage,
  isPaid,
  paidAt,
  isDelivered,
  deliveredAt,
}) => {
  return (
    <>
      {/* Shipping */}
      <Shipping
        shippingAddress={shippingAddress}
        name={name}
        email={email}
        isOrderPage={isOrderPage}
        isDelivered={isDelivered}
        deliveredAt={deliveredAt}
      />

      {/* Payment Method */}
      <PaymentMethod
        paymentMethod={paymentMethod}
        isOrderPage={isOrderPage}
        isPaid={isPaid}
        paidAt={paidAt}
      />

      {/* Ordered items */}
      <OrderedItems />
    </>
  );
};

export default InfoPanel;
