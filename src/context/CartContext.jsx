import React, { createContext, useContext, useState } from "react";
import { useProduct } from "./ProductContext";
import { toast } from "sonner";
import { useAuth } from "./AuthContext";

const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const { productCount } = useProduct();
  const { token, username } = useAuth();
  const [cartItems, setcartItems] = useState([]);

  const addToCart = (product) => {
    if (token && username) {
      setcartItems((prevItems) => [...prevItems, product]);
      toast.success("product have been added to the cart");
    } else {
      toast.error("You can't use shopping cart. you must log in first");
    }
  };

  const deleteCart = (id) => {
    setcartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.attributes.price * productCount,
      0
    );
  };

  const subtotal = cartItems.map((item) =>
    Math.floor(item.attributes.price * productCount)
  );

  let item = cartItems.map((item) => {
    const { name, price, count } = item.attributes;
    return { name, price, count };
  });

  return (
    <CartContext.Provider
      value={{ addToCart, cartItems, deleteCart, totalPrice, subtotal, item }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
