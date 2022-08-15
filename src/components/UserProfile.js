import React, { useState } from "react";
import { getWishlist } from "../utils/api/wishlist";
import { useQuery } from "react-query";
import { ProductRow } from "./products";
import { Button, HandleAsync } from "./ui";
import styled from "@emotion/styled";

export default function UserProfile() {
  // Fetch query, changing this will refetch with new url.
  const [query, setQuery] = useState("/products");

  // Get request for wishlist products
  const { data, isLoading, isError } = useQuery(["wishlist", query], () =>
    getWishlist()
  );

  return (
    <Section>
      <div>
        <h2>Shopping Cart</h2>
        <CartText>Your shopping cart currenly has: 3 items.</CartText>
        <div>
          <Button href="/cart" isLink={true}>
            Go to Cart
          </Button>
        </div>
      </div>
      <div>
        <h2>Wishlist</h2>
        <p>Your wishlist currently has 2 items.</p>
        <HandleAsync isLoading={isLoading} isError={isError}>
          <ProductRow products={data} />
        </HandleAsync>
      </div>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const CartText = styled.p`
  margin-bottom: 1rem;
`;
