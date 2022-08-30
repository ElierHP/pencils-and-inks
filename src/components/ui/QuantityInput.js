import React, { useContext } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { getCart, updateCart } from "../../utils/api/cart";
import { Cart } from "../../context/CartProvider";

export default function QuantityInput({ quantity, setQuantity, id, type }) {
  const [, setCart, , , , setIsError] = useContext(Cart);

  const handleChange = async (e) => {
    // Value can't be below 0.
    let currentQuantity = Math.floor(e.target.value < 0 ? 0 : e.target.value);
    setQuantity(currentQuantity);

    // Send update request when quantity changes in cart page.
    if (type === "cart") {
      try {
        await updateCart(id, parseInt(currentQuantity));
        const res = await getCart();
        setCart(res);
      } catch (error) {
        setIsError(true);
      }
    }
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
