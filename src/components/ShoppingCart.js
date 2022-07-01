import React from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { GrCart } from "react-icons/gr";

export default function ShoppingCart() {
  return (
    <Cart>
      <GrCart size={35} />
      <CartTitle>Cart</CartTitle>
    </Cart>
  );
}

// Styles
const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  margin-left: auto;
  margin-right: -1.7rem;
  ${theme.mq()[2]} {
    /* Order was used to swap placements between cart and searchbar. */
    order: 3;
  }
`;

const CartTitle = styled.span`
  display: none;
  ${theme.mq()[2]} {
    display: block;
  }
`;
