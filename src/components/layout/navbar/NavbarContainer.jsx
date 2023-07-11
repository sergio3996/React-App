import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NavbarContainer;
