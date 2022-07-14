import React, { useState, createContext, useEffect } from "react";
import { getUser } from "../utils/api/users";

export const User = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const serverRequest = () => getUser(setUser);
    serverRequest();
  }, []);

  return <User.Provider value={[user, setUser]}>{children}</User.Provider>;
};
