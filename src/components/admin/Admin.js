import React, { useState } from "react";
import { useQuery } from "react-query";
import { createProduct, getProducts } from "../../utils/api/products";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import { Button } from "../ui";
import styled from "@emotion/styled";

export default function Admin() {
  const [adding, setAdding] = useState(false);

  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useQuery("products", () => getProducts());

  return (
    <>
      <Wrapper>
        {!adding && (
          <Button onClick={() => setAdding(!adding)}>Add New Product</Button>
        )}

        {adding && <ProductForm setAdding={setAdding} refetch={refetch} />}

        <ProductList
          products={products}
          isLoading={isLoading}
          isError={isError}
          refetch={refetch}
        />
      </Wrapper>
    </>
  );
}

// Styles
const Wrapper = styled.div`
  padding: 2rem 0;
`;
