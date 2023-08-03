import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DropdownMenu from "../../common/DropdownMenu/DropdownMenu";
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import CartWidget from "../../common/CartWidget/CartWidget";

const Navbar = () => {
  const menu1Items = [
    { itemName: "MacBook Air", categoryName: "macbook-air" },
    { itemName: "MacBook Pro", categoryName: "macbook-pro" },
  ];
  const menu2Items = [
    { itemName: "iPad", categoryName: "ipad" },
    { itemName: "iPad Air", categoryName: "ipad-air" },
  ];
  const menu3Items = [
    { itemName: "iPhone 14", categoryName: "iphone14" },
    { itemName: "iPhone 13", categoryName: "iphone13" },
  ];

  const { authUser, userSignOut } = useContext(UserContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouse = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link
              to={"/"}
              style={{
                color: "white",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Apple Store
              <img
                src="https://res.cloudinary.com/dtaq3xptn/image/upload/v1689036489/Apple-store/apple_geq628.png"
                alt=""
                style={{ width: 25, marginLeft: 5 }}
              />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <DropdownMenu buttonText="Mac" menuItems={menu1Items} />
            <DropdownMenu buttonText="Ipad" menuItems={menu2Items} />
            <DropdownMenu buttonText="Iphone" menuItems={menu3Items} />
            <Link to="/cart" style={{ color: "white" }}>
              <CartWidget />
            </Link>
            {authUser ? (
              <>
                <Button sx={{ color: "#fff" }} onClick={handleMouse}>
                  {authUser.email} <ArrowDropDownIcon />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Button
                    onClick={userSignOut}
                    variant="text"
                    sx={{ backgroundColor: "white", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>Salir</MenuItem>
                  </Button>
                </Menu>
              </>
            ) : (
              <Link to="/signin">
                <Button variant="outlined" sx={{ color: "#fff" }}>
                  Ingresar
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;
