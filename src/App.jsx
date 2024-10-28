import React from "react";
import "./style.css";
import "./media.css";
import HomePage from "./Pages/HomePage";
import Shop from "./Pages/Shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import { CartProvider } from "./context/CartContext";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = ({ queryClient }) => {
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
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
};

export default App;
