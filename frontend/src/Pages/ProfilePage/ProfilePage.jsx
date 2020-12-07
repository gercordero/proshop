import React, { useState, useEffect } from "react";
// Router
import { Link as RouterLink } from "react-router-dom";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { getUserDetails } from "../../actions/userActions";
// Components
import { RegisterForm as UpdateUserForm } from "../../Components";
// Material UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Alert from "@material-ui/lab/Alert";
// Styled components
import { PageSection } from "../styles/PageSection";
import { Grid } from "@material-ui/core";

const ProfilePage = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

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
        dispatch("profile");
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [history, dispatch, user, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
    } else {
      // Dispatch login
      dispatch(registerUser(name, email, password));
    }
  };

  // Props to pass to RegisterForm component
  const FormProps = {
    loading,
    submitHandler,
    setName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setMessage,
  };

  return (
    <PageSection>
      <Container>
        <Grid container spacing={3}>
          {/* Update profile form*/}
          <Grid item md={3}>
            <UpdateUserForm {...FormProps} />
          </Grid>
          {/* User orders */}
          <Grid item md={9}></Grid>
        </Grid>
      </Container>
    </PageSection>
  );
};

export default ProfilePage;
