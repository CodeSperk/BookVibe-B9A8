import { createBrowserRouter } from "react-router-dom";
import Layout from "./root/Layout";
import Home from "./pages/home/Home";
import Listed from "./pages/listed/Listed";
import ToRead from "./pages/toRead/ToRead";
import BookDetails from "./pages/bookDetails/BookDetails";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/listedBooks",
        element:<Listed></Listed>,
        loader:()=> fetch("./data.json")
      },
      {
        path:"/pagesToRead",
        element:<ToRead></ToRead>,
        loader:()=> fetch("./data.json")
      },
      {
        path:"/bookDetails/:id",
        element:<BookDetails></BookDetails>,
        loader:() => fetch("./data.json")
      },
      {
        path:"/faq",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ]
  },
]);