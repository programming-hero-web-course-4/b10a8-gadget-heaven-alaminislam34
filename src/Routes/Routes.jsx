import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Unknown from "../Pages/Unknown";
import ViewDetails from "../Pages/ViewDetails";
import Cart from "../Pages/Cart";
import WishList from "../Pages/WishList";
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
        path: "/unknown",
        element: <Unknown />,
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails />,
        loader: () => fetch("/gadget.json"),
      },
    ],
  },
]);
export default router;
