import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, addToCart, amountInCart = 1 }) => {
  const [quantity, setQuantity] = useState(amountInCart);

  const increaseQuantity = () => {
    quantity < stock && setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  return (
    <Counter
      stock={stock}
      addToCart={addToCart}
      decreaseQuantity={decreaseQuantity}
      increaseQuantity={increaseQuantity}
      quantity={quantity}
    />
  );
};

export default CounterContainer;
