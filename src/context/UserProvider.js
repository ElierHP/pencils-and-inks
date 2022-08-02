import React, { useState, createContext, useEffect } from "react";
import { getUser } from "../utils/api/users";
import { Spinner } from "../components/ui";
import { getCart } from "../utils/api/cart";

export const User = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const serverRequest = async () => {
      try {
        await getUser(setUser);

        const cartRes = await getCart();
        setCart(cartRes);

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
        <User.Provider value={[user, setUser, cart]}>{children}</User.Provider>
      )}
    </>
  );
};
