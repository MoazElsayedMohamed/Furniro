import React from "react";
import "./style.css";
import "./media.css";
import HomePage from "./Pages/HomePage";
import Shop from "./Pages/Shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleProduct from "./components/products/SingleProduct";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/product/:id",
      element: <SingleProduct />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
