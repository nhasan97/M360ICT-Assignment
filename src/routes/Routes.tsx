import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Sales from "../pages/Sales/Sales";
import AddUser from "../pages/AddUser/AddUser";
import UpdateUser from "../pages/UpdateUser/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticationLayout></AuthenticationLayout>,
    children: [
      {
        path: "/",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "users",
        element: <Users></Users>,
      },
      {
        path: "sales",
        element: <Sales></Sales>,
      },
      {
        path: "add-user",
        element: <AddUser></AddUser>,
      },
      {
        path: "update-user/:id",
        element: <UpdateUser></UpdateUser>,
      },
    ],
  },
]);

export default router;
