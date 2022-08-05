import React, { useContext } from "react";
import { getCart, postCart } from "../../utils/api/cart";
import { Cart } from "../../context/CartProvider";
import { User } from "../../context/UserProvider";
import Button from "./Button";

export default function CartButton({ id }) {
  const [, setCart, , , , setIsError] = useContext(Cart);
  const [, , setLoading] = useContext(User);

  const handleClick = async (id) => {
    setLoading(true);
    try {
      await postCart(id);
      const res = await getCart();
      setCart(res);
    } catch (error) {
      setIsError(true);
    }
    setTimeout(() => setLoading(false), 250);
  };
  return <Button onClick={() => handleClick(id)}>Add To Cart</Button>;
}
