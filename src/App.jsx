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
import { PasswordProvider } from "./context/PasswordContext";
import Contact from "./Pages/Contact";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
import { ProductProvider } from "./context/ProductContext";
import { ShopProductsProvider } from "./context/ShopProductsContext";

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
  ]);

  return (
    <>
      <AuthProvider>
        <ShopProductsProvider>
          <ProductProvider>
            <CartProvider>
              <PasswordProvider>
                <RouterProvider router={router} />
              </PasswordProvider>
            </CartProvider>
          </ProductProvider>
        </ShopProductsProvider>
      </AuthProvider>
      <Toaster />
    </>
  );
};

export default App;
