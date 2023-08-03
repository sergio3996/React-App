import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";
import UserContextComponent from "./context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserContextComponent>
        <CartContextComponent>
          <AppRouter />
        </CartContextComponent>
      </UserContextComponent>
    </BrowserRouter>
  );
}

export default App;
