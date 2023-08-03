import { Grid } from "@mui/material";
import "./ItemDetail.css";
import CounterContainer from "../../common/Counter/CounterContainer";

const ItemDetail = ({ product, addToCart, amountInCart }) => {
  return (
    <Grid container justifyContent={"center"} padding={10}>
      <div className="itemDetail">
        <img src={product.img} alt="" />
        <div className="itemDetailText">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Stock: {product.stock}</p>
          <h3>US$ {product.price}</h3>
          <CounterContainer
            stock={product.stock}
            addToCart={addToCart}
            amountInCart={amountInCart}
          />
        </div>
      </div>
    </Grid>
  );
};

export default ItemDetail;
