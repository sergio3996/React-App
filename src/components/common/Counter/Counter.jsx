import { Box, Button, Typography } from "@mui/material";

const Counter = ({
  quantity,
  stock,
  addToCart,
  decreaseQuantity,
  increaseQuantity,
}) => {
  return (
    <Box display="flex" alignItems="center" marginTop={2} flexWrap="wrap">
      <Typography variant="body1" component="div" marginRight={2}>
        Cantidad:
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "black", color: "white" }}
        onClick={decreaseQuantity}
        disabled={quantity <= 1}
      >
        -
      </Button>
      <Typography
        variant="body1"
        component="div"
        marginLeft={1}
        marginRight={1}
      >
        {quantity}
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "black", color: "white" }}
        onClick={increaseQuantity}
        disabled={quantity >= stock}
      >
        +
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          width: "100%",
          marginTop: 5,
        }}
        onClick={() => addToCart(quantity)}
      >
        Agregar al carrito
      </Button>
    </Box>
  );
};

export default Counter;
