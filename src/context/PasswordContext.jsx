import React, { createContext, useContext, useState } from "react";

const PasswordContext = createContext("");

const PasswordProvider = ({ children }) => {
  const [showPassword, setShowPassword] = useState(false);

  function handleClick() {
    setShowPassword(!showPassword);
  }

  return (
    <PasswordContext.Provider value={{ showPassword, handleClick }}>
      {children}
    </PasswordContext.Provider>
  );
};
const usePassword = () => useContext(PasswordContext);

export { usePassword, PasswordProvider };
