import React, { useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../../utils/api/products";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import { Button } from "../ui";
import styled from "@emotion/styled";

export default function Admin() {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useQuery("products", () => getProducts());

  return (
    <>
      <Wrapper>
        {/* Show or hide button based on isAdding, isEditing states.*/}
        {!isAdding && !isEditing && (
          <Button onClick={() => setIsAdding(!isAdding)}>
            Add New Product
          </Button>
        )}

        {/* Maps through products and displays them. */}
        {!isAdding && (
          <ProductList
            products={products}
            isLoading={isLoading}
            isError={isError}
            refetch={refetch}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        )}

        {/* If adding is true, show add new product form. */}
        {isAdding && (
          <ProductForm
            isAdding={isAdding}
            setDisplay={setIsAdding}
            refetch={refetch}
          />
        )}
      </Wrapper>
    </>
  );
}

// Styles
const Wrapper = styled.div`
  padding: 2rem 0;
`;
