import React from "react";
import Brands from "../components/Brands";
import CartDetails from "../components/CartDetails";
import CustomHero from "../components/CustomHero";
import { CartProvider } from "@/context/CartContext";

const Cart = () => {
  return (
    <div>
      <CartProvider>
        <CustomHero pageName="Cart" />
        <CartDetails />
        <Brands />
      </CartProvider>
    </div>
  );
};

export default Cart;
