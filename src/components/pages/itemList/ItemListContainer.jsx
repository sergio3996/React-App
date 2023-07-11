import { useState } from "react";
import ItemList from "./ItemList";
import { useEffect } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsByCategory = products.filter(
      (item) => item.category === categoryName
    );
    const data = new Promise((resolve, reject) => {
      resolve(categoryName ? productsByCategory : products);
    });

    data.then((res) => setItems(res)).catch((err) => console.log(err));
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
