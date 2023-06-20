import "./ItemList.css";

const ItemList = ({ greeting }) => {
  return (
    <div>
      <h2 className="greeting">{greeting}</h2>
    </div>
  );
};

export default ItemList;
