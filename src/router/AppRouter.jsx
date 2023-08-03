import { Route, Routes } from "react-router-dom";
import { menuRoutes } from "./menuRoutes";
import Layout from "../components/layout/Layout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
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
