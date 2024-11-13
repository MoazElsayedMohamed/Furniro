import React from "react";
import "./style.css";
import "./media.css";
import HomePage from "./Pages/HomePage";
import Shop from "./Pages/Shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import MainLayout from "./MainLayout";
import AppWrapper from "./AppWrapper";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
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
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <AppWrapper>
      <RouterProvider router={router}></RouterProvider>
    </AppWrapper>
  );
};

export default App;
