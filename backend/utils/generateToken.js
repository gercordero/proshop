import jwt from "jsonwebtoken";

// Generates token for user AUTH
export const generateToken = (id) => {
  // jwt.sign(payload, secret, options)
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
