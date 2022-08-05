import React, { useState, createContext, useEffect } from "react";
import { getUser } from "../utils/api/users";
import { Spinner } from "../components/ui";

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
        <Spinner height={500} />
      ) : (
        <User.Provider value={[user, setUser, setLoading]}>
          {children}
        </User.Provider>
      )}
    </>
  );
};
