import React from "react";
import styled from "@emotion/styled";
import { Section, Container, HandleAsync } from "../ui";
import { useQuery } from "react-query";
import { getProducts } from "../../utils/api/products";
import { ProductRow } from "../products";

export default function LatestProducts() {
  // Queries
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", () => getProducts("/products?filter=latest"));

  return (
    <Section>
      <Container>
        <Title>Latest Products</Title>

        {/* Display List, if there's no loading or error. */}
        <HandleAsync isLoading={isLoading} isError={isError}>
          <ProductRow products={products} />
        </HandleAsync>
      </Container>
    </Section>
  );
}

// Styles
const Title = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
`;
