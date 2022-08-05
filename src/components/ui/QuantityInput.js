import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { updateCart } from "../../utils/api/cart";

export default function QuantityInput({ initialQuantity, id }) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleChange = (e) => {
    // Value can't be below 1.
    e.target.value == 0 ? setQuantity(1) : setQuantity(e.target.value);

    // Send patch request to server, updating shopping cart session.
    updateCart(id, parseInt(e.target.value));

    // Reload page.
    window.location.reload();
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
  width: 65px;
  padding: 0.5rem 0 0.5rem 1rem;
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
