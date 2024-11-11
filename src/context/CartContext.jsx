import React, { createContext, useContext, useState } from "react";
import { useProduct } from "./ProductContext";
import { toast } from "sonner";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

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
    const { id } = item;
    return { name, price, count, id };
  });
  const [checkoutInput, setCheckoutInput] = useState({
    first_name: "",
    last_name: "",
    country_code: "",
    company: "",
    address: "",
    city: "",
    province: "",
    zip_code: "",
  });
  if (item.length === 1) {
    item = item[0];
  }

  function handleChange(e) {
    setCheckoutInput((prevInput) => ({
      ...prevInput,
      [e.target.id]: e.target.value,
    }));
  }

  const requestData = {
    data: {
      ...checkoutInput,
      order_items: [
        {
          product: item.id,
          count: item.count,
        },
      ],
    },
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:1337/api/checkout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();
      console.log(data);

      toast.success("checkout successfully");
      window.location.replace("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cartItems,
        deleteCart,
        totalPrice,
        subtotal,
        item,
        handleSubmit,
        handleChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
