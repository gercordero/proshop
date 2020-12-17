import React, { useState, useEffect } from "react";
// Axios
import axios from "axios";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { resetCart } from "../../actions/cartActions";
import { getOrder, payOrder } from "../../actions/orderActions";
// Redux action constants
import {
  ORDER_CREATE_RESET,
  ORDER_PAY_RESET,
} from "../../constants/orderConstants";
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

  // Component state
  const [sdkReady, setSdkReady] = useState(false);

  // Redux state
  // ORDER GET
  const { order, loading, error } = useSelector((state) => state.orderGet);
  // ORDER PAY
  const { loading: loadingPay, success: successPay } = useSelector(
    (state) => state.orderPay
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/config/paypal`
      );
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (successPay) {
      // Reset redux state
      dispatch(resetCart());
      dispatch({ type: ORDER_CREATE_RESET });
      dispatch({ type: ORDER_PAY_RESET });
    }

    // On first render will be no "orderGet" so we dispatch getOrder
    if (!order || order._id !== orderId || successPay) {
      dispatch(getOrder(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, order, sdkReady, successPay]);

  const handleSuccesPayment = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult));
  };

  let panelProps = {};
  let orderSummaryProps = {};

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

    orderSummaryProps = {
      sdkReady,
      loadingPay,
      cartItems: order.orderItems,
      isPaid: order.isPaid,
      orderTotalPrice: order.totalPrice,
      isVariantPage: true,
      handleSuccesPayment,
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
                <OrderSumary {...orderSummaryProps} />
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
