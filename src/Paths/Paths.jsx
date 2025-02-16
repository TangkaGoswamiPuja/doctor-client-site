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
import Private from "../Authfile/Private";
import Details from "../Pages/All-tests/Details";
import Dashboard from "../Pages/DashBoard/Dashboard";
import Upcome from "../Pages/DashBoard/UserDB/Upcome";
import Update from "../Pages/DashBoard/UserDB/Update";
import AllUsers from "../Pages/DashBoard/AdminDB/AllUsers";
import ManageItems from "../Pages/DashBoard/AdminDB/ManageItems";
import Bookings from "../Pages/DashBoard/AdminDB/Bookings";
import AdminRoute from "../Authfile/AdminRoute";
import BannerUp from "../Pages/DashBoard/AdminDB/BannerUp";
import TestList from "../Pages/DashBoard/AdminDB/TestList";
import UpdateTest from "../Pages/DashBoard/AdminDB/UpdateTest";

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
          path: '/details/:id',
          element: <Private><Details></Details></Private>,
          loader: ({params}) => fetch(`https://doc-server-site.vercel.app/alltest/${params.id}`)

      },
        {
          path:"/login",
          element:<Login></Login>
        },
        {path:"/register",
          element:<Reg></Reg>
        },

       
      ]
    },
    {
      path: "dashboard",
      element: <Private><Dashboard></Dashboard></Private>,
      children:[
      //   {path:"dashboard",
      //   element:<Dashboard></Dashboard>,
      // },
        {path:"userDb",
element: <UserDb></UserDb>   
 },
      {
        path:"upcome",
        element:<Upcome></Upcome>
      },
      {
        path:"update",
        element:<Update></Update>
      },
      // admin
      {path:"adminDb",
      element: <AdminRoute><AdminDb></AdminDb></AdminRoute>
    },
    {path:"userlist",
        element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {path:"manage",
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {path:"bookings",
        element:<AdminRoute><Bookings></Bookings></AdminRoute>
      },
      {
        path: "bannerup",
        element:<AdminRoute><BannerUp></BannerUp></AdminRoute>
      },
      {
        path:"testlist",
        element:<AdminRoute><TestList></TestList></AdminRoute>

      },
      {
        path:"updatetest/:id",
        element:<AdminRoute><UpdateTest></UpdateTest></AdminRoute>,
        loader:({params})=>fetch(`https://doc-server-site.vercel.app/alltest/${params.id}`)
      }
      ]
    },
  ]);