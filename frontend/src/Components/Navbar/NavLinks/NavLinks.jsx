import React from "react";
// React Router
import { Link as RouterLink, Route } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
// Components
import { SearchBox } from "../../";
import UserMenu from "./UserMenu/UserMenu";
import AdminMenu from "./AdminMenu/AdminMenu";
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
      <li style={{ margin: "1rem 1rem 1rem 0" }}>
        <Link component={RouterLink} to="/cart">
          <FaShoppingCart />
          cart
        </Link>
      </li>
      {/* Admin panel */}
      {userInfo && userInfo.isAdmin && <AdminMenu />}
      {/* Show user menu if logged in, else show login link */}
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
