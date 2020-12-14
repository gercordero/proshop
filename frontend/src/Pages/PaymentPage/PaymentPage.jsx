import React, { useState } from "react";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { addPaymentMethod } from "../../actions/cartActions";
// Components
import { FormContainer, CheckoutSteps, PaymentForm } from "../../Components";
// Material UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// Styled components
import { PageSection } from "../styles/PageSection";

const ShippingPage = ({ history }) => {
  // Redux state
  const dispatch = useDispatch();
  const {
    shippingAddress,
    paymentMethod: paymentMethodFromRedux,
  } = useSelector((state) => state.cart);

  if (!shippingAddress) {
    history.push("/shipping");
  }

  // Component state
  const [paymentMethod, setPaymentMethod] = useState(paymentMethodFromRedux);

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addPaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  // Pass props to ShippingForm
  const formProps = {
    paymentMethod,
    setPaymentMethod,
    submitHandler,
  };

  return (
    <PageSection>
      <Container>
        <FormContainer>
          <CheckoutSteps style={{ marginBottom: "1rem" }} currentStep={1} />
          <Typography
            variant="h3"
            component="h1"
            style={{ marginBottom: "2rem" }}
          >
            Payment
          </Typography>
          <PaymentForm {...formProps} />
        </FormContainer>
      </Container>
    </PageSection>
  );
};

export default ShippingPage;
