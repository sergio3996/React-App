import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Badge } from "@mui/material";
import CartWidget from "../../common/cartWidget/cartWidget";
import DropdownMenu from "../../common/DropdownMenu/DropdownMenu";
import { Link } from "react-router-dom";

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
            <Button sx={{ color: "#fff" }}>
              <Badge badgeContent="5" color="secondary">
                <Link to="/cart" style={{ color: "white" }}>
                  <CartWidget />
                </Link>
              </Badge>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;
