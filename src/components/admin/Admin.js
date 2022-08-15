import React, { useState } from "react";
import { useQuery } from "react-query";
import { getProducts } from "../../utils/api/products";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { IoAddCircleOutline } from "react-icons/io5";

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
          <AddNew>
            <h3>Add New Product</h3>
            <IconContainer>
              <IoAddCircleOutline
                size={40}
                onClick={() => setIsAdding(!isAdding)}
              />
            </IconContainer>
          </AddNew>
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
  padding-top: 1.5rem;
  ${theme.mq()[0]} {
    grid-template-columns: 7fr 1fr;
    padding: 1.5rem 6rem;
  }
`;

const AddNew = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const IconContainer = styled.div`
  cursor: pointer;
  color: ${theme.colors.neutral};
  transition: ${theme.transition.color};
  &:hover {
    color: ${theme.colors.btnHover};
  }
`;
