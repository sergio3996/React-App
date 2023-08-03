import SignIn from "../components/pages/auth/SignIn";
import SignUp from "../components/pages/auth/SignUp";
import ItemDetailContainer from "../components/pages/ItemDetail/ItemDetailContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import CheckOut from "../components/pages/checkout/CheckOut";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "/itemDetail/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckOut,
  },
  { id: "signin", path: "/signin", Element: SignIn },
  { id: "signup", path: "/signup", Element: SignUp },
];
