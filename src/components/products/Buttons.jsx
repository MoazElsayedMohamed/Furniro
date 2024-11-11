import React from "react";
import { useProduct } from "../../context/ProductContext";
import { useCart } from "../../context/CartContext";
import { Button } from "../ui/button";

const Buttons = ({product}) => {
  const { addToCart } = useCart();
  const { productCount, handleCountDecrease, handleCountIncrease } =
    useProduct();

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button variant="outline1" size="lg">
          <p onClick={handleCountDecrease}>-</p>
          <p>{productCount}</p>
          <p onClick={handleCountIncrease}>+</p>
        </Button>

        <Button variant="outline1" size="xl" onClick={() => addToCart(product)}>
          add to cart
        </Button>
        <Button variant="outline1" size="xl">
          + compare
        </Button>
      </div>
    </>
  );
};

export default Buttons;
