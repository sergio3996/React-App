import { Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ buttonText, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouse = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button sx={{ color: "#fff" }} onClick={handleMouse}>
        {buttonText}
        <ArrowDropDownIcon />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {menuItems.map((item, index) => (
          <Link
            to={`/category/${item.categoryName}`}
            style={{ color: "black", textDecoration: "none" }}
            key={index}
          >
            <MenuItem onClick={handleClose}>{item.itemName}</MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  );
};

export default DropdownMenu;
