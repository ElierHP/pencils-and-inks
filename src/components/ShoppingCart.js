import React, { useContext } from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { CgShoppingCart } from "react-icons/cg";
import { User } from "../context/UserProvider";
import Link from "next/link";

export default function ShoppingCart() {
  const [, , cart] = useContext(User);

  return (
    <Cart>
      <Link href="/cart">
        <a>
          <CartContainer>
            {/* Check that cart isn't empty. */}
            {cart.length > 0 && (
              <ItemCount>
                <Number>{cart.length}</Number>
              </ItemCount>
            )}
            <CartIcon />
          </CartContainer>
        </a>
      </Link>
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
  margin-left: auto;
  margin-right: -1.7rem;
  ${theme.mq()[2]} {
    /* Order was used to swap placements between cart and searchbar. */
    order: 3;
  }
`;

const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ItemCount = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: ${theme.colors.success};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Number = styled.span`
  margin-top: 0.2rem;
  color: ${theme.colors.light};
  font-size: ${theme.fontSizes.small}rem;
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
