import React from "react";
// Components
import { Progress } from "../";
// Form fields
import Email from "./Email/Email";
import Password from "./Password/Password";
// Material UI
import Button from "@material-ui/core/Button";

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
        {loading ? <Progress style={{ marginBottom: "0" }} /> : "Sign in"}
      </Button>
    </form>
  );
};

export default LoginForm;
