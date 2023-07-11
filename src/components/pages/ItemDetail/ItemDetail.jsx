import { Box, Button, Grid, Typography } from "@mui/material";
import "./itemDetail.css";
import Counter from "../../common/Counter/Counter";

const ItemDetail = ({ product }) => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={8}>
        <div className="itemDetail">
          <img src={product.img} alt="" />
          <div className="itemDetailText">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Stock: {product.stock}</p>
            <h3>US$ {product.price}</h3>
            <Counter stock={product.stock} />
            <Button
              variant="contained"
              sx={{ backgroundColor: "black", color: "white" }}
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
