import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import ViewDetails from "../Pages/ViewDetails";
import Cart from "../Pages/Cart";
import WishList from "../Pages/WishList";
import Users from "../Pages/User";
import SignUp from "../Pages/User/SignUp";
import Login from "../Pages/User/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/gadget.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/gadget.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/cart",
            element: <Cart />,
          },
          {
            path: "/dashboard/wishlist",
            element: <WishList />,
          },
        ],
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails />,
        loader: () => fetch("/gadget.json"),
      },
      {
        path: "/users",
        element: <Users />,
        children: [
          {
            path: "/users",
            element: <Login />,
          },
          {
            path: "/users/signUp",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);
export default router;
