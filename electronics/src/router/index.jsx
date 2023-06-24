import { useRoutes } from "react-router-dom";
import Contact from "../pages/contact/index";
import Home from "../pages/home/index";

const Router = () => {
  const mainRoutes = [
    {
      path: "/",
      element: <Home />,
      exact: true,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ];

  const route = useRoutes(mainRoutes);
  return <>{route}</>;
};

export default Router;
