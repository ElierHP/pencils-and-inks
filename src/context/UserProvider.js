import React, { useState, createContext, useEffect } from "react";

export const User = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <User.Provider value={[user, setUser]}>{children}</User.Provider>;
};
