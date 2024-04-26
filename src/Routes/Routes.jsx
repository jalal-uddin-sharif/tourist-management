import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Error from "../Pages/Error";
import Home from "../Home/Home";
import AllTouristsSpot from "../Pages/AllTouristsSpot";
import AddTouristsSpot from "../Pages/AddTouristsSpot";
import MyList from "../Pages/MyList";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      errorElement: <Error/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/all-tourists-spot",
            element: <AllTouristsSpot/>
        },
        {
            path: "/add-tourists-spot",
            element: <AddTouristsSpot/>
        },
        {
            path: "/my-list",
            element: <MyList/>
        },
      ]
    },
  ]);