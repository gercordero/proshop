import React, { useEffect } from "react";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { removeFromCart } from "../../actions/cartActions";
import { createOrder } from "../../actions/orderActions";
import {
  FormContainer,
  CheckoutSteps,
  InfoPanel,
  CartItem,
  OrderSumary,
} from "../../Components";
// Material UI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
// Styled components
import { PageSection } from "../styles/PageSection";

const PlaceOrderPage = ({ history }) => {
  // Redux state
  const { cartItems, shippingAddress, paymentMethod } = useSelector(
    (state) => state.cart
  );
  const { loading, error, success, order } = useSelector(
    (state) => state.orderCreate
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // * REDIRECTION *
    if (success) {
      history.push(`/order/${order._id}`);
    }

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
  }, [success, order, cartItems, shippingAddress, paymentMethod, history]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = (itemsPrice, shippingPrice, taxPrice, totalPrice) => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
    );
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
                  />
                </Grid>
              ))}
          </Grid>
          {/* ORDER SUMARY GRID */}
          <Grid item xs={12} sm={6} md={3} style={{ margin: "0 auto" }}>
            {/* OrderSumary */}
            <OrderSumary
              cartItems={cartItems}
              loading={loading}
              checkOutHandler={checkOutHandler}
            />
            {/* ERROR MESSAGE FROM ACTION*/}
            {error && (
              <Alert severity="error" style={{ marginTop: "30px" }}>
                {error}
              </Alert>
            )}
          </Grid>
        </Grid>
      </Container>
    </PageSection>
  );
};

export default PlaceOrderPage;
