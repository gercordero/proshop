import React from "react";
// Components
import { Progress } from "../";
// Form fields
import Name from "./Name/Name";
import Email from "./Email/Email";
import Password from "./Password/Password";
// Material UI
import Button from "@material-ui/core/Button";

const UpdateForm = ({
  submitHandler,
  name,
  email,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  loading,
  ...rest
}) => {
  return (
    <form onSubmit={submitHandler}>
      {/* NAME */}
      <Name setName={setName} name={name} />
      {/* EMAIL */}
      <Email setEmail={setEmail} email={email} />
      {/* PASSWORD */}
      <Password setPassword={setPassword} />
      {/* CONFIRM PASSWORD */}
      <Password setConfirmPassword={setConfirmPassword} isConfirmField />
      {/* SUBMIT */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        style={{ width: "100%", fontWeight: "bold", margin: "16px 0" }}
      >
        {loading ? (
          <Progress style={{ marginBottom: "0" }} />
        ) : (
          "Update Profile"
        )}
      </Button>
    </form>
  );
};

export default UpdateForm;
