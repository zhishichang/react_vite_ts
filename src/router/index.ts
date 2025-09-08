import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
];

const router = createBrowserRouter(routes);

export default router;
