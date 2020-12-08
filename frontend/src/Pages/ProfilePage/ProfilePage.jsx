import React, { useState, useEffect } from "react";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { getUserDetails } from "../../actions/userActions";
// Components
import { UpdateForm } from "../../Components";
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

  useEffect(() => {
    // Redirect user to another page if it isn't loged in
    if (!userInfo) {
      history.push("/login");
    } else {
      // If it's loged then we fire off dispatch("profile") to get the user details
      // And then the page will re-render and go into the "else" filling the fields automaticly
      if (!user) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [history, dispatch, user, userInfo]);

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
      console.log("GOOD!");
      // Dispatch login
      // dispatch(getUserDetails(name, email, password));
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

  return (
    <PageSection>
      <Container>
        <Grid container spacing={3}>
          {/* Update profile form*/}
          <Grid item md={3}>
            <Typography variant="h4" component="h2">
              User profile
            </Typography>
            {/* ERROR MESSAGE */}
            {error && (
              <Alert severity="error" style={{ marginTop: "30px" }}>
                {error}
              </Alert>
            )}
            {/* ERROR MESSAGE */}
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
          <Grid item md={9}>
            <Typography variant="h4" component="h2">
              My orders
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </PageSection>
  );
};

export default ProfilePage;
