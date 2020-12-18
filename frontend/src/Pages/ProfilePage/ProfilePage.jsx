import React, { useState, useEffect } from "react";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { getUserDetails, updateUser } from "../../actions/userActions";
import { listMyOrders } from "../../actions/orderActions";
// Redux constants
import { USER_UPDATE_PROFILE_RESET } from "../../constants/userConstants";
// Components
import { UpdateForm, Progress, MyOrdersPanel } from "../../Components";
// Validate fields
import validateFields from "./validation/validateFields";
// Material UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
// Styled components
import { PageSection } from "../styles/PageSection";
import { Grid } from "@material-ui/core";

const ProfilePage = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState([]);

  // Redux state
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.userUpdateProfile);
  const { loading: ordersLoading, error: ordersError, orders } = useSelector(
    (state) => state.orderMyList
  );

  useEffect(() => {
    // Redirect user to another page if it isn't loged in
    if (!userInfo) {
      history.push("/login");
    } else {
      // If user is already logged in then we fire off dispatch("profile") to get the user details
      // And then the page will re-render and go into the "else" filling the fields automaticly
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [history, dispatch, user, userInfo, success]);

  const submitHandler = (e) => {
    // Prevent page redirection
    e.preventDefault();
    // Set message to an empty array to clear previus errors
    setMessage([]);
    // Validate all fields
    const fieldsErrors = validateFields(name, email, password, confirmPassword);
    // If we ge any errors we put it on the message state
    if (fieldsErrors.length > 0) {
      setMessage([...message, ...fieldsErrors]);
      //Else we dispatch the user Update
    } else {
      // Dispatch update
      dispatch(updateUser({ name, email, password }));
    }
  };

  // Props to pass to RegisterForm component
  const FormProps = {
    loading,
    name,
    email,
    submitHandler,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
  };

  const orderDetailsHandler = (id) => {
    history.push(`/order/${id}`);
  };

  return (
    <PageSection>
      <Container>
        <Grid container spacing={5}>
          {/* Update profile form*/}
          <Grid item sm={12} md={3}>
            <Typography variant="h4" component="h2">
              User profile
            </Typography>
            {/* SUCCESS MESSAGE */}
            {success && (
              <Alert severity="success" style={{ marginTop: "30px" }}>
                Profile updated successfully
              </Alert>
            )}
            {/* ERROR MESSAGE FROM ACTION*/}
            {error && (
              <Alert severity="error" style={{ marginTop: "30px" }}>
                {error}
              </Alert>
            )}
            {/* ERROR MESSAGE FROM THIS PAGE*/}
            {message.length > 0 &&
              message.map((msg, index) => (
                <Alert
                  key={index}
                  severity="error"
                  style={{ marginTop: "30px" }}
                >
                  {msg}
                </Alert>
              ))}
            {/* Update form */}
            <UpdateForm {...FormProps} />
          </Grid>
          {/* User orders */}
          <Grid item xs={12} sm={12} md={9}>
            <Typography variant="h4" component="h2">
              My orders
            </Typography>
            {ordersLoading ? (
              <Progress />
            ) : ordersError ? (
              <Alert severity="error">{ordersError}</Alert>
            ) : (
              orders && (
                <MyOrdersPanel
                  orders={orders}
                  orderDetailsHandler={orderDetailsHandler}
                />
              )
            )}
          </Grid>
        </Grid>
      </Container>
    </PageSection>
  );
};

export default ProfilePage;
