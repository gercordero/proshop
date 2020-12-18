import React, { useState, useEffect } from "react";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { addShippingAddress } from "../../actions/cartActions";
// Components
import { FormContainer, ShippingForm, CheckoutSteps } from "../../Components";
// Material UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
// Styled components
import { PageSection } from "../styles/PageSection";

const ShippingPage = ({ history }) => {
  // Redux state
  const dispatch = useDispatch();
  const { shippingAddress, cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.userLogin);

  // Component state
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");

  useEffect(() => {
    // * REDIRECTION *
    if (cartItems.length === 0) {
      history.push("/");
    }

    if (!userInfo || !userInfo.name) {
      history.push("/login");
    }

    // * END OF REDIRECTION *
  }, [history, cartItems, userInfo]);

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  // Pass props to ShippingForm
  const formProps = {
    address,
    city,
    postalCode,
    country,
    submitHandler,
    setAddress,
    setCity,
    setPostalCode,
    setCountry,
  };

  return (
    <PageSection>
      <Container>
        <FormContainer>
          <CheckoutSteps style={{ marginBottom: "1rem" }} currentStep={0} />
          <Typography
            variant="h3"
            component="h1"
            style={{ marginBottom: "1rem" }}
          >
            Shipping
          </Typography>
          <ShippingForm {...formProps} />
        </FormContainer>
      </Container>
    </PageSection>
  );
};

export default ShippingPage;
