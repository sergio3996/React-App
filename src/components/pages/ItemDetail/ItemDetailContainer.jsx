import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const data = new Promise((resolve, reject) => {
      let productSelected = products.find((item) => item.id === Number(id));
      resolve(productSelected);
    });

    data.then((res) => setProduct(res)).catch((err) => console.log(err));
  }, [id]);

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;
