import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Unknown from "../Pages/Unknown";
import ViewDetails from "../Pages/ViewDetails";
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
