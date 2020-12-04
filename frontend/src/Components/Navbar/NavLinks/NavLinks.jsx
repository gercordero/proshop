import React from "react";
// React Router
import { Link as RouterLink } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from "react-redux";
// Redux actions
import { logoutUser } from "../../../actions/userActions";
// Material UI
import Link from "@material-ui/core/Link";
// Dropdown
import { StyledDropdown } from "./styles/NavLinks.styles";
import "react-dropdown/style.css";
// React icons
import { FaShoppingCart, FaUser } from "react-icons/fa";

const NavLinks = ({ className }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  const options = [
    { value: "profile", label: "Profile" },
    { value: "logout", label: "Logout" },
  ];

  const onChangeHandler = (event) => {
    if (event.value === "logout") {
      dispatch(logoutUser());
    }
  };

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
        <li style={{ display: "flex" }}>
          {/* USER MENU */}
          <FaUser />
          <StyledDropdown
            options={options}
            onChange={onChangeHandler}
            value={userInfo.name}
            placeholder="Select an option"
          />
        </li>
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
