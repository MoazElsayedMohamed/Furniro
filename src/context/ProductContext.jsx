import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";
import { toast } from "sonner";

const ProductContext = createContext("");

function ProductProvider({ children }) {
  const { token, username } = useAuth();
  const [productCount, setProductCount] = useState(1);

  function handleCountIncrease() {
    if (token && username) {
      setProductCount(productCount + 1);
    } else {
      toast.error("You can't increase count. you must log in first");
    }
  }

  function handleCountDecrease() {
    if (token && username) {
      if (productCount > 1) setProductCount(productCount - 1);
    } else {
      toast.error("You can't decrease count. you must log in first");
    }
  }
  return (
    <ProductContext.Provider
      value={{ productCount, handleCountDecrease, handleCountIncrease }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
