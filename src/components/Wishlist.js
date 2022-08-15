import React from "react";
import { getWishlist } from "../utils/api/wishlist";
import { useQuery } from "react-query";

import styled from "@emotion/styled";

import WishlistProducts from "./sections/WishlistProducts";

export default function Wishlist() {
  // Get request for wishlist products
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useQuery("wishlist", () => getWishlist());

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
        <h2>Wishlist</h2>
        <WishlistText>
          Your wishlist currently has {getProducts().length}
          {getProducts().length === 1 ? " item." : " items."}
        </WishlistText>
        <WishlistProducts
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

const WishlistText = styled.p`
  margin-bottom: 1rem;
`;
