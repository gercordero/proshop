import React, { useState, useEffect } from "react";
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
    cartItems,
    shippingAddress,
    paymentMethod: paymentMethodFromRedux,
  } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.userLogin);

  // Component state
  const [paymentMethod, setPaymentMethod] = useState(paymentMethodFromRedux);

  useEffect(() => {
    // * REDIRECTION *
    if (!userInfo || !userInfo.name) {
      history.push("/login");
    }

    if (cartItems.length === 0) {
      history.push("/");
    }

    if (!shippingAddress) {
      history.push("/shipping");
    }
    // * END OF REDIRECTION *
  }, [history, userInfo, cartItems, shippingAddress]);

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
