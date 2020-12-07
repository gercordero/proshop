import React, { useState, useEffect } from "react";
// Router
import { Link as RouterLink } from "react-router-dom";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { loginUser } from "../../actions/userActions";
// Components
import { FormContainer, LoginForm } from "../../Components";
// Material UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
// Styled components
import { PageSection } from "../styles/PageSection";

const LoginPage = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Redirect if necesary
  const redirect = location.search ? location.search.split("=")[1] : "";

  // Redux state
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  // Use effect used to redirect user to another page if it's already loged in
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatch login
    dispatch(loginUser(email, password));
  };

  // Props to pass to LoginForm component
  const FormProps = {
    submitHandler,
    setEmail,
    setPassword,
    loading,
    error,
  };

  return (
    <PageSection>
      <Container>
        <FormContainer>
          <Typography variant="h3" component="h1" align="center">
            Sign in
          </Typography>
          {/* LOGIN FORM */}
          <LoginForm {...FormProps} />
        </FormContainer>

        <Typography align="center">
          {"New Customer? "}
          <Link
            component={RouterLink}
            to={redirect ? `/register?redirect=${redirect}` : `/register`}
          >
            <strong>Register</strong>
          </Link>
        </Typography>
      </Container>
    </PageSection>
  );
};

export default LoginPage;
