import React from "react";
// React Router
import { Link as RouterLink } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
// Components
import UserMenu from "./UserMenu/UserMenu";
// Material UI
import Link from "@material-ui/core/Link";
// React icons
import { FaShoppingCart, FaUser } from "react-icons/fa";

/**
 * @param {className} string - An object to add className to main component.
 **/
const NavLinks = ({ className }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <ul className={className}>
      {/* CART */}
      <li>
        <Link component={RouterLink} to="/cart">
          <FaShoppingCart />
          cart
        </Link>
      </li>
      {userInfo ? (
        <UserMenu name={userInfo.name} />
      ) : (
        <li>
          {/* LOGIN */}
          <Link component={RouterLink} to="/login">
            <FaUser />
            login
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
