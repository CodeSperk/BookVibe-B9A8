import { createBrowserRouter } from "react-router-dom";
import Layout from "./root/Layout";
import Home from "./pages/home/Home";
import Listed from "./pages/listed/Listed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"listed-book",
        element:<Listed></Listed>
      }
    ]
  },
]);