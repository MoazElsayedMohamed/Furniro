import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../ui/button";
import React from "react";

export default function ProductCount() {
  const { token, username } = useAuth();
  const [productCount, setProductCount] = useState(1);

  function handleCountIncrease() {
    if (token && username) {
      setProductCount(productCount + 1);
    }
    //  else {
    //   Toaster.error("You can't increase count. you must log in first");
    // }
  }

  function handleCountDecrease() {
    if (token && username) {
      if (productCount > 1) setProductCount(productCount - 1);
    }
    //  else {
    //   toast.error("You can't decrease count. you must log in first");
    // }
  }
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button variant="outline1" size="lg">
          <p onClick={handleCountDecrease}>-</p>
          <p>{productCount}</p>
          <p onClick={handleCountIncrease}>+</p>
        </Button>
      </div>
    </>
  );
}
