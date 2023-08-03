import { useState } from "react";
import ItemList from "./ItemList";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  useEffect(() => {
    let consult;
    let productsCollection = collection(db, "products");
    if (!categoryName) {
      consult = productsCollection;
    } else {
      consult = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consult).then((res) => {
      let arrayProducts = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayProducts);
    });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
