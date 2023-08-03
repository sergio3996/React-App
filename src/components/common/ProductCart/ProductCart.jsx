import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../pages/cart/Cart.css";

const ProductCart = ({
  item,
  deleteById,
  decreaseQuantity,
  increaseQuantity,
}) => {
  return (
    <div className="cartCard">
      <div className="cartCard-info">
        <img src={item.img} alt="" />
        <div>
          <h2>{item.title}</h2>
          <h3>US$ {item.price}</h3>
          <p>{item.description}</p>
        </div>
      </div>

      <Box
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        flexWrap="wrap"
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            minWidth: "0",
            width: "30px",
          }}
          onClick={() => {
            increaseQuantity(item.id);
          }}
          disabled={item.quantity >= item.stock}
        >
          +
        </Button>
        <Typography variant="body1" component="div" margin={1}>
          {item.quantity}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            color: "white",
            minWidth: "0",
            width: "30px",
          }}
          onClick={() => {
            decreaseQuantity(item.id);
          }}
          disabled={item.quantity <= 1}
        >
          -
        </Button>
      </Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          marginLeft: 2,
          width: "20px",
          minWidth: "5px",
        }}
        onClick={() => deleteById(item.id)}
      >
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default ProductCart;
