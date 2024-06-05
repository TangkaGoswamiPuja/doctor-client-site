import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllTests from "../Pages/All-tests/AllTests";
import Login from "../Pages/Log&reg/Login";
import Reg from "../Pages/Log&reg/Reg";
import UserDb from "../Pages/DashBoard/UserDB/UserDb";
import AdminDb from "../Pages/DashBoard/AdminDB/AdminDb";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {path:'/',
            element:<Home></Home>
        },
        {
            path:"/alltest",
            element:<AllTests></AllTests>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {path:"/register",
          element:<Reg></Reg>
        },
        {path:"/userDb",
          element:<UserDb></UserDb>
        },
        {path:"/adminDb",
          element: <AdminDb></AdminDb>
        }
      ]
    },
  ]);