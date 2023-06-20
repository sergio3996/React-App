import { Button } from "@mui/material";
import NavbarContainer from "./components/layout/navbar/NavbarContainer";
import { useState } from "react";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const greeting = "Bienvenido a nuestra tienda de tecnologia!";

  return (
    <div>
      <NavbarContainer cartCount={cartCount} />
      <Button
        variant="contained"
        onClick={() => setCartCount(cartCount + 1)}
        sx={{ backgroundColor: "orange", margin: "5px 5px", hover: "black" }}
      >
        AGREGAR AL CARRITO
      </Button>
      <ItemListContainer greeting={greeting} />
    </div>
  );
}

export default App;
