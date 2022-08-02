import React from "react";
import { postCart } from "../../utils/api/cart";
import Button from "./Button";

export default function CartButton({ id }) {
  const handleClick = (id) => {
    postCart(id);
    window.location.reload();
  };
  return <Button onClick={() => handleClick(id)}>Add To Cart</Button>;
}
