import React, { useEffect } from "react";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { resetCart } from "../../actions/cartActions";
import { getOrder } from "../../actions/orderActions";
// Redux action constants
import { ORDER_CREATE_RESET } from "../../constants/orderConstants";
// Components
import { Progress, InfoPanel, CartItem, OrderSumary } from "../../Components";
// Material UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
// Styled components
import { PageSection } from "../styles/PageSection";

const OrderPage = ({ match }) => {
  // Order id from url
  const orderId = match.params.id;

  // Redux state
  const { order, loading, error } = useSelector((state) => state.orderGet);
  const dispatch = useDispatch();

  useEffect(() => {
    // Reset redux state
    dispatch(resetCart());
    dispatch({ type: ORDER_CREATE_RESET });
    // Get placed order
    if (!order || order._id !== orderId) {
      dispatch(getOrder(orderId));
    }
  }, [dispatch, orderId, order]);

  let panelProps = {};

  if (order) {
    panelProps = {
      shippingAddress: order.shippingAddress,
      paymentMethod: order.paymentMethod,
      name: order.user.name,
      email: order.user.email,
      isPaid: order.isPaid,
      paidAt: order.paidAt,
      isDelivered: order.isDelivered,
      deliveredAt: order.deliveridAt,
      isOrderPage: true,
    };
  }

  return (
    <PageSection>
      <Container>
        {loading ? (
          <Progress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            <Typography
              variant="h3"
              component="h1"
              style={{ marginBottom: "4rem" }}
            >
              Order {order._id}
            </Typography>
            <Grid container spacing={3}>
              {/* PANEL GRID */}
              <Grid container item md={9} spacing={3}>
                <InfoPanel {...panelProps} />
                {/* CART ITEMS */}
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <Grid key={item.product} item md={12}>
                      <CartItem item={item} isVariantPage />
                    </Grid>
                  ))}
              </Grid>
              {/* ORDER SUMARY GRID */}
              <Grid item xs={12} sm={6} md={3} style={{ margin: "0 auto" }}>
                <OrderSumary cartItems={order.orderItems} isVariantPage />
                {/* ERROR MESSAGE FROM ACTION*/}
                {error && (
                  <Alert severity="error" style={{ marginTop: "30px" }}>
                    {error}
                  </Alert>
                )}
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </PageSection>
  );
};

export default OrderPage;
