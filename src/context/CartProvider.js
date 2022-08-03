import React, { createContext } from "react";
import { getCart } from "../utils/api/cart";
import { useQuery } from "react-query";

export const Cart = createContext();

export const CartProvider = ({ children }) => {
  const { data: cart, isLoading, isError } = useQuery("cart", () => getCart());

  return (
    <Cart.Provider value={[cart, isLoading, isError]}>{children}</Cart.Provider>
  );
};
