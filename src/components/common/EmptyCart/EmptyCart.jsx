import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: "300px",
        width: "700px",
        alignItems: "center",
      }}
    >
      <h2>¡Hay un carrito que llenar!</h2>
      <h3>Actualmente no tenés productos en tu carrito.</h3>
      <Link to="/">
        <Button variant="contained" sx={{ backgroundColor: "black" }}>
          Buscar Productos
        </Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
