import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

const Counter = ({ stock }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    quantity < stock && setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  return (
    <Box display="flex" alignItems="center" marginTop={2}>
      <Typography variant="body1" component="div" marginRight={2}>
        Cantidad:
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "black", color: "white" }}
        onClick={decreaseQuantity}
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
      >
        +
      </Button>
    </Box>
  );
};

export default Counter;
