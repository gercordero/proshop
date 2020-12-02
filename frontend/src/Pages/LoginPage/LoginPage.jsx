import React, { useState, useEffect } from "react";
// Router
import { Link as RouterLink } from "react-router-dom";
// Redux methods
import { useDispatch, useSelector } from "react-redux";
// Redux action
import { loginUser } from "../../actions/userActions";
// Components
import { Progress, FormContainer } from "../../Components";
// Material UI
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import Link from "@material-ui/core/Link";
// Styled components
import { LoginPageSection } from "./styles/LoginPage.styles";

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

  return (
    <LoginPageSection>
      <Container>
        <FormContainer>
          <Typography variant="h3" component="h1" align="center">
            Sign in
          </Typography>
          <form onSubmit={submitHandler}>
            {/* EMAIL */}
            <FormControl
              fullWidth
              required
              margin="normal"
              error={error === "Invalid email"}
              onChange={(e) => setEmail(e.target.value)}
            >
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input id="email" aria-describedby="email-helper-text" />
              {error === "Invalid email" && (
                <FormHelperText error id="email-helper-text">
                  Wrong email! Are you registered?
                </FormHelperText>
              )}
            </FormControl>
            {/* PASSWORD */}
            <FormControl
              fullWidth
              required
              margin="normal"
              error={error === "Invalid password"}
              onChange={(e) => setPassword(e.target.value)}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                type="password"
                id="password"
                aria-describedby="password-helper-text"
              />
              {error === "Invalid password" && (
                <FormHelperText error id="email-helper-text">
                  You have entered a wrong password!
                </FormHelperText>
              )}
            </FormControl>
            {/* SUBMIT */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              style={{ width: "100%", fontWeight: "bold", margin: "16px 0" }}
            >
              Sign in
            </Button>
          </form>
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
    </LoginPageSection>
  );
};

export default LoginPage;
