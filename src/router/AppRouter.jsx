import { Route, Routes } from "react-router-dom";
import NavbarContainer from "../components/layout/navbar/NavbarContainer";

import { menuRoutes } from "./menuRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<NavbarContainer />}>
        {menuRoutes.map((elem) => {
          return (
            <Route key={elem.id} path={elem.path} element={<elem.Element />} />
          );
        })}
      </Route>
      <Route path="*" element={<h1>404 - Not Found</h1>} />
    </Routes>
  );
};

export default AppRouter;
