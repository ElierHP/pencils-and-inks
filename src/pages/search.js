import React from "react";
import Layout from "../components/layout/Layout";
import { PageContainer, HandleAsync } from "../components/ui";
import { ProductRow } from "../components/products";
import { useQuery } from "react-query";
import { getProducts } from "../utils/api/products";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import Searchbar from "../components/Searchbar";

export default function Search() {
  const router = useRouter();

  // Get Request for products based on search filter.
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products", router.query.q], () =>
    getProducts(`/products?search=${router.query.q}`)
  );

  return (
    <Layout>
      <PageContainer>
        <Title>
          Search results for <SearchQuery>{`"${router.query.q}"`}</SearchQuery>
        </Title>
        <HandleAsync isLoading={isLoading} isError={isError}>
          <ProductRow products={products} />
        </HandleAsync>
      </PageContainer>
    </Layout>
  );
}

// Styles
const Title = styled.h2`
  margin-bottom: 4rem;
  margin-left: 0.2rem;
`;

const SearchQuery = styled.span`
  color: ${theme.colors.neutralDark};
`;
