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
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Profile from "../Pages/Profile";
import UpdateSpot from "../component/UpdateSpot";

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
            element: <AllTouristsSpot/>,
            loader: ()=> fetch('https://tourist-server-five.vercel.app/spot-data')
        },
        {
            path: "/add-tourists-spot",
            element: <AddTouristsSpot/>
        },
        {
            path: "/my-list",
            element: <MyList/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/profile",
            element: <Profile/>
        },
        {
            path: "/update-spot/:id",
            element: <UpdateSpot/>
        },
        
      ]
    },
  ]);