import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { ShopProductsProvider } from "./context/ShopProductsContext";
import { CartProvider } from "./context/CartContext";
import { PasswordProvider } from "./context/PasswordContext";
import { Toaster } from "sonner";
import { ProductProvider } from "./context/ProductContext";

// eslint-disable-next-line react/prop-types
const AppWrapper = ({ children }) => {
  return (
    <AuthProvider>
      <ShopProductsProvider>
        <CartProvider>
          <ProductProvider>
            <PasswordProvider>
              {children}
              <Toaster />
            </PasswordProvider>
          </ProductProvider>
        </CartProvider>
      </ShopProductsProvider>
    </AuthProvider>
  );
};

export default AppWrapper;
