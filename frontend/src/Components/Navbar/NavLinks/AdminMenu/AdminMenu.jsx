import React, { useState } from "react";
// React Router
import { Link as RouterLink } from "react-router-dom";
// Material UI
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
// Styled components
import { MenuButton, StyledLink } from "./styles/AdminMenu.styles";
// React icons
import { FaLock } from "react-icons/fa";

const AdminMenu = () => {
  // State
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle click
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle close
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* MENU BUTTON */}
      <MenuButton
        aria-controls="admin-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FaLock />
        Admin Panel
      </MenuButton>
      {/* MENU */}
      <Menu
        id="admin-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <StyledLink component={RouterLink} to="/admin/usersList">
            Users List
          </StyledLink>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AdminMenu;
