import React, { createContext, ReactNode, useContext } from "react";

interface AuthContextType {
  token: string | null;
  username: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  return (
    <AuthContext.Provider value={{ token, username }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
