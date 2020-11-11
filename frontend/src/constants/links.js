import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

// Links array
const data = [
  { id: 1, text: "cart", url: "/cart", icon: <FaShoppingCart /> },
  { id: 2, text: "sign in", url: "/login", icon: <FaUser /> },
];

// Making an array of li elements with all the data array converted
const navlinks = data.map((link) => (
  <li key={link.id}>
    <a href={link.url}>
      {link.icon}
      {link.text}
    </a>
  </li>
));

// Return an ul element with all the rendered li elements from above
const links = ({ className }) => {
  return <ul className={className}>{navlinks}</ul>;
};

export default links;
