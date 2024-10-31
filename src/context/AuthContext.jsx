import { createContext, useContext, useState } from "react";

const AuthContext = createContext("");

function AuthProvider({ children }) {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  return (
    <AuthContext.Provider value={{ token, username }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
