import React, { useState } from "react";
// React Router
import { Link as RouterLink } from "react-router-dom";
// Redux
import { useDispatch } from "react-redux";
// Redux actions
import { logoutUser } from "../../../../actions/userActions";
// Material UI
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// Styled components
import { MenuButton, StyledLink } from "./styles/UserMenu.styles";
// React icons
import { FaUser } from "react-icons/fa";

/**
 * @param {name} string - Name from the loged in user.
 **/
const UserMenu = ({ name }) => {
  // State
  const [anchorEl, setAnchorEl] = useState(null);

  // Redux state
  const dispatch = useDispatch();

  // Handle click
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle close
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle logout
  const handleLogout = () => {
    handleClose();
    dispatch(logoutUser());
  };

  return (
    <>
      {/* MENU BUTTON */}
      <MenuButton
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FaUser />
        {name}
      </MenuButton>
      {/* MENU */}
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <StyledLink component={RouterLink} to="/profile">
            Profile
          </StyledLink>
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
