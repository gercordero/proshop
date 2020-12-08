import {
  validateName,
  validateEmail,
  validatePassword,
} from "../../../validation/update";

const validateFields = (name, email, password, confirmPassword) => {
  const errors = [];
  // NAME
  if (!validateName(name).isValid) {
    errors.push(validateName(name).message);
  }
  // EMAIL
  if (email.length > 0) {
    if (!validateEmail(email).isValid) {
      errors.push(validateEmail(email).message);
    }
  }

  // Password
  if (password.length > 0) {
    if (!validatePassword(password).isValid) {
      errors.push(validatePassword(password).message);
    }
  }

  // Passwords are equal?
  if (password !== confirmPassword) {
    errors.push("Passwords do not match.");
  }
  return errors;
};

export default validateFields;
