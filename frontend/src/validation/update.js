import Validator from "validator";
import isEmpty from "./isEmpty";

// Name validation
export const validateName = (name) => {
  let message = "";

  if (!Validator.isLength(name, { min: 3, max: 10 })) {
    message = "Name must be between 3 and 10 characters";
  }

  if (!Validator.isAlpha(name)) {
    message = "Name must only contain letters. No numbers, spaces or symbols.";
  }

  if (isEmpty(name)) {
    message = "Name field is required";
  }

  return {
    message,
    isValid: isEmpty(message),
  };
};

// Email validation
export const validateEmail = (email) => {
  let message = "";

  if (!Validator.isEmail(email)) {
    message = "Email is invalid";
  }

  return {
    message,
    isValid: isEmpty(message),
  };
};

// Password Validation
export const validatePassword = (password) => {
  let message = "";

  if (!Validator.isStrongPassword(password, { minLength: 6, minSymbols: 0 })) {
    message =
      "Password must have at least 6 characters. And must have at least one uppercase and lowercase letter and also one number.";
  }

  return {
    message,
    isValid: isEmpty(message),
  };
};
