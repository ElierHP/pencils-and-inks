import React from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { CgShoppingCart } from "react-icons/cg";

export default function ShoppingCart() {
  return (
    <Cart>
      <CartIcon />
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

const CartIcon = styled(CgShoppingCart)`
  font-size: 30px;
  transition: ${theme.transition.primary};
  &:hover {
    color: ${theme.colors.hover};
    transform: rotate(-8deg);
  }

  ${theme.mq()[1]} {
    font-size: 40px;
  }
`;
const CartTitle = styled.span`
  display: none;
  color: inherit;
  ${theme.mq()[2]} {
    display: block;
  }
`;
