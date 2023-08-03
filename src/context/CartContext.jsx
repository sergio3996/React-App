import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    let newArray = cart.filter((item) => item.id !== id);
    setCart(newArray);

    toast.success("Producto Eliminado", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const addProduct = (item) => {
    let duplicate = cart.some((element) => element.id === item.id);
    if (duplicate) {
      let newArray = cart.map((element) => {
        if (element.id === item.id) {
          return { ...element, quantity: item.quantity };
        } else {
          return element;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, item]);
    }
  };

  const increaseQuantity = (idProduct) => {
    cart.forEach((item) => {
      if (item.id == idProduct) {
        item.quantity = item.quantity + 1;
      }
    });
    setCart([...cart]);
  };

  const decreaseQuantity = (idProduct) => {
    cart.forEach((item) => {
      if (item.id == idProduct) {
        item.quantity = item.quantity - 1;
      }
    });
    setCart([...cart]);
  };

  const totalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.price * element.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    let producto = cart.find((element) => element.id === +id);
    return producto?.quantity;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);

    return total;
  };

  let data = {
    cart,
    addProduct,
    clearCart,
    deleteById,
    decreaseQuantity,
    increaseQuantity,
    getQuantityById,
    getTotalQuantity,
    totalPrice,
  };

  return (
    <CartContext.Provider value={data}>
      <ToastContainer />
      {children}
    </CartContext.Provider>
  );
};

export default CartContextComponent;
