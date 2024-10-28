import React, { createContext, useContext, useState } from "react";

const CartContext = createContext("");

const CartProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState([]);

  const addToCart = (product) => {
    setcartItems((prevItems) => [...prevItems, product]);
  };

  const deleteCart = (id) => {
    setcartItems((items) => items.filter((item) => item.id !== id));
  };

  const totalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.attributes.price * item.attributes.count,
      0
    );
  };

  const subtotal = cartItems.map((item) =>
    Math.floor(item.attributes.price * item.attributes.count)
  );

  function items() {
    const item = cartItems.map((item) => {
      const { name, price, count } = item.attributes;
      return { name, price, count };
    });
    return item;
  }

  return (
    <CartContext.Provider
      value={{ addToCart, cartItems, deleteCart, totalPrice, subtotal, items }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
