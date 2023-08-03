import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  const { addProduct, getQuantityById } = useContext(CartContext);

  const amountInCart = getQuantityById(id);

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);
    getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  const addToCart = (quantityNumber) => {
    let data = {
      ...product,
      quantity: quantityNumber,
    };
    addProduct(data);

    toast.success("Producto Agregado", {
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

  return (
    <>
      <ItemDetail
        product={product}
        addToCart={addToCart}
        amountInCart={amountInCart}
      />
      <ToastContainer />
    </>
  );
};

export default ItemDetailContainer;
