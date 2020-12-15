import React, { useEffect } from "react";
// React Redux
import { useDispatch, useSelector } from "react-redux";
// Redux Action
import { addToCart, removeFromCart } from "../../actions/cartActions";
// Component
import { CartItem, SubTotal } from "../../Components";
// Meterial UI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
// Styled components
import { PageSection } from "../styles/PageSection";

const CartPage = ({ match, location, history }) => {
  // Get product id if any
  const productId = match.params.id;
  // Get quantity from url query
  const quantity = location.search ? Number(location.search.split("=")[1]) : 1; // location.split("=") returns ["?qty", "NUMBER"]
  // Redux state
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <PageSection>
      <Container>
        <Typography variant="h2" gutterBottom>
          Shopping cart
        </Typography>
        {cartItems.length > 0 ? (
          <Grid container spacing={3}>
            <Grid container item md={9} spacing={3}>
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
            <Grid item md={3}>
              <SubTotal
                cartItems={cartItems}
                checkOutHandler={checkOutHandler}
              />
            </Grid>
          </Grid>
        ) : (
          <Alert severity="info">Your cart is empty!</Alert>
        )}
      </Container>
    </PageSection>
  );
};

export default CartPage;
