import React, { useState, createContext, useEffect } from "react";
import { getUser } from "../utils/api/users";

export const User = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const serverRequest = async () => {
      try {
        await getUser(setUser);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    serverRequest();
  }, []);

  return (
    <>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <User.Provider value={[user, setUser]}>{children}</User.Provider>
      )}
    </>
  );
};
