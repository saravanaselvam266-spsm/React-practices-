import { createBrowserRouter } from "react-router-dom";

// pages import
import Css from "../pages/Css.jsx";
import Html from "../pages/Html.jsx";
import JavaScript from '../pages/JavaScript.jsx'

// layout page
import MainLayout from "../layouts/MainLayout.jsx";

// Creating my router setup
const mainRouter = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/html",
      element: <Html />,
    },
    {
      path: "/css",
      element: <Css />,
    },
    {
      path: "/javascript",
      element: <JavaScript />,
    },
  ],
};

export default mainRouter;
