import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Badge, Menu, MenuItem } from "@mui/material";
import CartWidget from "../../common/cartWidget/cartWidget";
import React from "react";

const Navbar = ({ cartCount }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "orange" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            TECH STORE
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }}>Inicio</Button>
            <Button
              sx={{ color: "#fff" }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Categorias
            </Button>
            <Button sx={{ color: "#fff" }}>
              <Badge badgeContent={cartCount} color="secondary">
                <CartWidget />
              </Badge>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Button sx={{ color: "black" }}>Monitores</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button sx={{ color: "black" }}>Graficas</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button sx={{ color: "black" }}>Procesadores</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button sx={{ color: "black" }}>Memorias</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button sx={{ color: "black" }}>Discos</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button sx={{ color: "black" }}>Refrigeracion</Button>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Navbar;
