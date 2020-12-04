import React, { useState } from "react";
// Components
import { Progress } from "../";
// Form fields
import Name from "./Name/Name";
import Email from "./Email/Email";
import Password from "./Password/Password";
// Material UI
import Button from "@material-ui/core/Button";

const RegisterForm = ({
  submitHandler,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  loading,
  ...rest
}) => {
  // We assumed that all fields start with errors so that the submit button begins disabled.
  const errors = {
    name: true,
    email: true,
    password: true,
    confirmPassword: true,
  };
  const [fieldError, setFieldError] = useState(errors);

  // An easy way to pass props
  const childrenProps = { fieldError, setFieldError };
  return (
    <form onSubmit={submitHandler}>
      {/* NAME */}
      <Name setName={setName} {...childrenProps} />
      {/* EMAIL */}
      <Email setEmail={setEmail} {...childrenProps} />
      {/* PASSWORD */}
      <Password setPassword={setPassword} {...childrenProps} />
      {/* CONFIRM PASSWORD */}
      <Password
        setConfirmPassword={setConfirmPassword}
        isConfirmField
        {...childrenProps}
      />
      {/* SUBMIT */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        style={{ width: "100%", fontWeight: "bold", margin: "16px 0" }}
        disabled={
          (loading |
            fieldError.name |
            fieldError.email |
            fieldError.password |
            fieldError.confirmPassword) ===
          1
            ? true
            : false
        }
      >
        {loading ? <Progress style={{ marginBottom: "0" }} /> : "Sign up"}
      </Button>
    </form>
  );
};

export default RegisterForm;
