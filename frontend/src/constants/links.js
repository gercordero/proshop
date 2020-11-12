import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { FaShoppingCart, FaUser } from "react-icons/fa";

// Links array
const data = [
  { id: 1, text: "cart", url: "/cart", icon: <FaShoppingCart /> },
  { id: 2, text: "sign in", url: "/login", icon: <FaUser /> },
];

// Making an array of li elements with all the data array converted
const navlinks = data.map((link) => (
  <li key={link.id}>
    <Link component={RouterLink} to={link.url}>
      {link.icon}
      {link.text}
    </Link>
  </li>
));

// Return an ul element with all the rendered li elements from above
const links = ({ className }) => {
  return <ul className={className}>{navlinks}</ul>;
};

export default links;
