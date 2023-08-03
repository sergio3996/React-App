import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  let cartQuantity = getTotalQuantity();
  return (
    <Button sx={{ color: "#fff" }}>
      <Badge badgeContent={cartQuantity} color="secondary" showZero>
        <ShoppingCartIcon />
      </Badge>
    </Button>
  );
};

export default CartWidget;
