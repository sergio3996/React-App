import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, deleteById, increaseQuantity, decreaseQuantity, totalPrice } =
    useContext(CartContext);

  let subTotal = totalPrice();
  let shippingPrice = subTotal * 0.1;
  let total = shippingPrice + subTotal;

  return (
    <Cart
      cart={cart}
      deleteById={deleteById}
      decreaseQuantity={decreaseQuantity}
      increaseQuantity={increaseQuantity}
      subTotal={subTotal}
      shippingPrice={shippingPrice}
      total={total}
    />
  );
};

export default CartContainer;
