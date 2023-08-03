import { Box, Button, Container, Grid } from "@mui/material";
import "./Cart.css";
import ProductCart from "../../common/ProductCart/ProductCart";
import { Link } from "react-router-dom";
import EmptyCart from "../../common/EmptyCart/EmptyCart";

const Cart = ({
  cart,
  deleteById,
  increaseQuantity,
  decreaseQuantity,
  subTotal,
  shippingPrice,
  total,
}) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Tu carrito</h1>
      <Box display={"flex"} justifyContent={"center"} marginTop={3}>
        <div className="cart">
          {cart.length <= 0 && <EmptyCart />}
          {cart.map((item) => (
            <ProductCart
              key={item.id}
              item={item}
              deleteById={deleteById}
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
            />
          ))}
        </div>
        <div className="cartInfo">
          <div className="resume">
            <h3>Resumen de compra</h3>
            <div className="prices">
              <div>
                <li>
                  <h4>SubTotal</h4>
                </li>
                <li>
                  <h4>Coste de Envio</h4>
                </li>
                <li>
                  <h4>Total</h4>
                </li>
              </div>
              <div>
                <li>
                  <h4>US$ {subTotal}</h4>
                </li>
                <li>
                  <h4>US$ {shippingPrice}</h4>
                </li>
                <li>
                  <h4>US$ {total}</h4>
                </li>
              </div>
            </div>
          </div>

          {cart.length > 0 && (
            <div className="cartInfo-buttons">
              <Link to="/checkout">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "black", width: "250px" }}
                >
                  Finalizar Compra
                </Button>
              </Link>
              <Link to="/">
                <Button
                  variant="outlined"
                  sx={{
                    width: "250px",
                    color: "black",
                    borderBlockColor: "black",
                  }}
                >
                  Continuar Comprando
                </Button>
              </Link>
            </div>
          )}
        </div>
      </Box>
    </>
  );
};

export default Cart;
