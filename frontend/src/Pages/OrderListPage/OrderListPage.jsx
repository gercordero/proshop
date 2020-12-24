import React, { useEffect } from "react";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { getAllOrders } from "../../actions/orderActions";
// Components
import { Progress, AdminOrdersPanel } from "../../Components";
// Material UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
// Styled components
import { PageSection } from "../styles/PageSection";

const OrderListPage = ({ history }) => {
  const dispatch = useDispatch();

  // Redux state
  const { loading, error, orders } = useSelector((state) => state.orderList);
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    // If user is admin will see the user list else will be redirecte to login page
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllOrders());
    } else {
      history.push("/login");
    }
  }, [history, userInfo, dispatch]);

  const editOrderHandler = (orderID) => {
    history.push(`/order/${orderID}`);
  };

  const usersPanelProps = {
    orders,
    editOrderHandler,
  };

  return (
    <PageSection>
      <Container>
        <Typography variant="h4" component="h2">
          Orders
        </Typography>
        {loading ? (
          <Progress />
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <AdminOrdersPanel {...usersPanelProps} />
        )}
      </Container>
    </PageSection>
  );
};

export default OrderListPage;
