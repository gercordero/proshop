import React from "react";
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

const UserMenu = ({ name }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    handleClose();
    dispatch(logoutUser());
  };

  return (
    <>
      <MenuButton
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FaUser />
        {name}
      </MenuButton>
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
