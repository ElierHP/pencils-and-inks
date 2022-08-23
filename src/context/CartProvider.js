import React, { createContext, useEffect, useState } from "react";
import { getCart } from "../utils/api/cart";

export const Cart = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const serverRequest = async () => {
      try {
        const res = await getCart();
        setCart(res);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    serverRequest();
  }, []);

  return (
    <Cart.Provider
      value={[cart, setCart, isLoading, setIsLoading, isError, setIsError]}
    >
      {children}
    </Cart.Provider>
  );
};
