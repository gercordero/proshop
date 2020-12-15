import React from "react";
// Components
import { Progress } from "../";
// Form fields
import Email from "./Email/Email";
import Password from "./Password/Password";
// Material UI
import Button from "@material-ui/core/Button";

/**
 * @param {submitHandler} function - Function to execute on button "Sign In" click.
 * @param {setEmail} function - Function to set the Email state of LoginPage.
 * @param {setPassword} function - Function to set the Password state of LoginPage.
 * @param {loading} boolean - A boolean to know if an async request is going on.
 * @param {error} string - A string with an error if any.
 **/
const LoginForm = ({
  submitHandler,
  setEmail,
  setPassword,
  loading,
  error,
}) => {
  return (
    <form onSubmit={submitHandler}>
      {/* EMAIL */}
      <Email setEmail={setEmail} error={error} />
      {/* PASSWORD */}
      <Password setPassword={setPassword} error={error} />
      {/* SUBMIT */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        style={{ width: "100%", fontWeight: "bold", margin: "16px 0" }}
        disabled={loading}
      >
        {loading ? <Progress /> : "Sign in"}
      </Button>
    </form>
  );
};

export default LoginForm;
