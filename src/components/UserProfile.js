import React, { useContext } from "react";
import { getWishlist } from "../utils/api/wishlist";
import { useQuery } from "react-query";
import { Button } from "./ui";
import styled from "@emotion/styled";
import { Cart } from "../context/CartProvider";
import WishlistSection from "./sections/WishlistSection";

export default function UserProfile() {
  // Get request for wishlist products
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useQuery("wishlist", () => getWishlist());

  const [cart] = useContext(Cart);

  const getProducts = () => {
    if (products) {
      return products;
    } else {
      return [];
    }
  };

  return (
    <Section>
      <div>
        <h2>Shopping Cart</h2>
        <CartText>
          Your shopping cart currenly has {cart.length}
          {cart.length === 1 ? " item." : " items."}
        </CartText>
        <div>
          <Button href="/cart" isLink={true}>
            Go to Cart
          </Button>
        </div>
      </div>
      <div>
        <h2>Wishlist</h2>
        <WishlistText>
          Your wishlist currently has {getProducts().length}
          {getProducts().length === 1 ? " item." : " items."}
        </WishlistText>
        <WishlistSection
          getProducts={getProducts}
          isLoading={isLoading}
          isError={isError}
          refetch={refetch}
        />
      </div>
    </Section>
  );
}

// Styles

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const CartText = styled.p`
  margin-bottom: 1rem;
`;

const WishlistText = styled.p`
  margin-bottom: 1rem;
`;
