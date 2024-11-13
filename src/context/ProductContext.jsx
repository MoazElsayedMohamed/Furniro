import React, { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";
import { toast } from "sonner";

const ProductContext = createContext("");

// eslint-disable-next-line react/prop-types
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

// import React, { createContext, ReactNode, useContext, useState } from "react";

// interface ProductContextType {
//   productCount: number;
//   setProductCount: React.Dispatch<React.SetStateAction<number>>;
// }

// const ProductContext = createContext<ProductContextType | undefined>(undefined);

// interface ProductProviderChildren {
//   children: ReactNode;
// }

// function ProductProvider({ children }: ProductProviderChildren) {
//   const [productCount, setProductCount] = useState<number>(1);

//   return (
//     <ProductContext.Provider value={{ productCount, setProductCount }}>
//       {children}
//     </ProductContext.Provider>
//   );
// }

// const useProduct = () => useContext(ProductContext);

// export { ProductProvider, useProduct };
