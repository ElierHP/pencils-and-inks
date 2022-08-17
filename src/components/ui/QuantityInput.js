import React, { useState, useContext, useEffect } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { getCart, updateCart } from "../../utils/api/cart";
import { Cart } from "../../context/CartProvider";

export default function QuantityInput({ initialQuantity = 1, id }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const [, setCart, , , , setIsError] = useContext(Cart);

  useEffect(() => {
    const serverReq = async () => {
      try {
        await updateCart(id, parseInt(quantity));
        const res = await getCart();
        setCart(res);
      } catch (error) {
        setIsError(true);
      }
    };

    serverReq();
  }, [quantity, id, setCart, setIsError]);

  const handleChange = async (e) => {
    // Value can't be below 0.
    e.target.value < 0 ? setQuantity(0) : setQuantity(e.target.value);
  };

  return (
    <CartInput>
      <CartQuantity>Quantity</CartQuantity>
      <Input type="number" value={quantity} onChange={(e) => handleChange(e)} />
    </CartInput>
  );
}

// Styles
const CartInput = styled.div`
  position: relative;
  height: 30px;
`;

const Input = styled.input`
  /* Galaxy Fold Breakpoint */
  @media only screen and (max-width: 350px) {
    width: 40px;
  }

  width: 65px;
  padding: 0.6rem 0 0.6rem 1rem;
  ${theme.mq()[0]} {
    width: 100px;
  }
`;

const CartQuantity = styled.span`
  position: absolute;
  top: -2.2rem;
  left: 0;
  font-size: ${theme.fontSizes.small}rem;
  color: ${theme.colors.neutral};
`;
