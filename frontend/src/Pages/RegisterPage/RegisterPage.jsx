import React, { useState, useEffect } from "react";
// Router
import { Link as RouterLink } from "react-router-dom";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { registerUser } from "../../actions/userActions";
// Components
import { FormContainer, RegisterForm } from "../../Components";
// Material UI
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Alert from "@material-ui/lab/Alert";
// Styled components
import { RegisterPageSection } from "./styles/RegisterPage.styles";

const RegisterPage = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  // Redirect if necesary
  const redirect = location.search ? location.search.split("=")[1] : "";

  // Redux state
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector(
    (state) => state.userRegister
  );

  // Use effect used to redirect user to another page if it's already loged in
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

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
    <RegisterPageSection>
      <Container>
        <FormContainer>
          <Typography variant="h3" component="h1" align="center">
            Sign up
          </Typography>
          {error && (
            <Alert severity="error" style={{ marginTop: "30px" }}>
              {error}
            </Alert>
          )}
          {message && (
            <Alert severity="error" style={{ marginTop: "30px" }}>
              {message}
            </Alert>
          )}
          <RegisterForm {...FormProps} />
        </FormContainer>

        <Typography align="center">
          {"Already a Customer? "}
          <Link
            component={RouterLink}
            to={redirect ? `/login?redirect=${redirect}` : `/login`}
          >
            <strong>Log in</strong>
          </Link>
        </Typography>
      </Container>
    </RegisterPageSection>
  );
};

export default RegisterPage;
