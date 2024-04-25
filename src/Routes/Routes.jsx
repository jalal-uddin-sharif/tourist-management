import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Error from "../Pages/Error";
import Home from "../Home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      errorElement: <Error/>,
      children: [
        {
            path: "/",
            element: <Home/>
        }
      ]
    },
  ]);