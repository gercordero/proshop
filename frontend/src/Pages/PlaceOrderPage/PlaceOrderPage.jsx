import React, { useEffect } from "react";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { removeFromCart } from "../../actions/cartActions";
// Components
import InfoPanel from "./InfoPanel/InfoPanel";
import {
  FormContainer,
  CheckoutSteps,
  CartItem,
  OrderSumary,
} from "../../Components";
// Material UI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// Styled components
import { PageSection } from "../styles/PageSection";

const PlaceOrderPage = ({ history }) => {
  // Redux state
  const { cartItems, shippingAddress, paymentMethod } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // * REDIRECTION *
    if (cartItems.length === 0) {
      history.push("/");
    }

    if (!shippingAddress) {
      history.push("/shipping");
    }

    if (paymentMethod === "") {
      history.push("/payment");
    }
    // * END OF REDIRECTION *
  }, [cartItems, shippingAddress, paymentMethod, history]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = () => {
    history.push("/");
  };

  return (
    <PageSection>
      <Container>
        {/* Check out steps */}
        <FormContainer>
          <CheckoutSteps style={{ marginBottom: "1rem" }} currentStep={2} />
        </FormContainer>
        {/* MAIN GRID */}
        <Grid container spacing={3}>
          {/* PANEL GRID */}
          <Grid container item md={9} spacing={3}>
            {/* INFO PANEL */}
            <InfoPanel
              shippingAddress={shippingAddress}
              paymentMethod={paymentMethod}
            />
            {/* CART ITEMS */}
            {cartItems &&
              cartItems.map((item) => (
                <Grid key={item.product} item md={12}>
                  <CartItem
                    item={item}
                    removeFromCartHandler={removeFromCartHandler}
                    isPlaceOrderPage
                  />
                </Grid>
              ))}
          </Grid>
          {/* ORDER SUMARY GRID */}
          <Grid item md={3}>
            {/* OrderSumary */}
            <OrderSumary
              cartItems={cartItems}
              checkOutHandler={checkOutHandler}
            />
          </Grid>
        </Grid>
      </Container>
    </PageSection>
  );
};

export default PlaceOrderPage;
