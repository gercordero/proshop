import React from "react";
// Components
import { Progress } from "../";
// Form fields
import Name from "./Name/Name";
import Email from "./Email/Email";
import Password from "./Password/Password";
// Material UI
import Button from "@material-ui/core/Button";

/**
 * @param {submitHandler} function - Function to execute on button "Continue" click.
 * @param {name} string - The name of the User.
 * @param {email} string - The email of the User.
 * @param {setName} function - Function to set the Name state of ProfilePage.
 * @param {setEmail} function - Function to set the Email state of ProfilePage.
 * @param {setPassword} function - Function to set the Password state of ProfilePage.
 * @param {setConfirmPassword} function - Function to set the ConfirmPassword state of ProfilePage.
 * @param {loading} boolean - A boolean to know if an async request is going on.
 **/
const UpdateForm = ({
  submitHandler,
  name,
  email,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  loading,
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
        {loading ? <Progress /> : "Update Profile"}
      </Button>
    </form>
  );
};

export default UpdateForm;
