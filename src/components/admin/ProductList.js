import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Button from "../ui/Button";
import { deleteProduct } from "../../utils/api/products";
import ProductForm from "./ProductForm";

export default function ProductList({
  products,
  isLoading,
  isError,
  refetch,
  isEditing,
  setIsEditing,
}) {
  // State for the current product that was clicked on via Edit.
  // This gets passed down to the edit form.
  const [product, setProduct] = useState({});

  const handleDelete = async (id) => {
    await deleteProduct(id);
    refetch();
  };

  const toggleEdit = (product) => {
    setIsEditing(!isEditing);
    setProduct(product);
  };

  return (
    <>
      {/* Check for loading & errors, then display UL. */}
      {!isLoading && !isError && !isEditing ? (
        <List>
          {products.map((product) => (
            <ListItem key={uuidv4()}>
              <a href={`/products/${product.id}`}>{product.title}</a>
              <BtnContainer>
                <Button
                  color={theme.colors.secondary}
                  onClick={() => toggleEdit(product)}
                >
                  Edit
                </Button>
                <Button onClick={() => handleDelete(product.id)}>Delete</Button>
              </BtnContainer>
            </ListItem>
          ))}
        </List>
      ) : (
        <>
          {/* If isEditing, display Edit form */}
          {isEditing && (
            <ProductForm
              setDisplay={setIsEditing}
              refetch={refetch}
              product={product}
            />
          )}

          {/* Loading Display */}
          {isLoading && <p>Loading</p>}

          {/* Error Display */}
          {isError && <p>Error</p>}
        </>
      )}
    </>
  );
}

// Styles
const List = styled.ol`
  text-align: left;
  background: ${theme.colors.light};
  padding: 0;
  padding-top: 4rem;
  ${theme.mq()[0]} {
    grid-template-columns: 7fr 1fr;
    padding: 6rem;
  }
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.4rem;
  &:hover {
    background: ${theme.colors.neutralLight};
  }
  ${theme.mq()[0]} {
    grid-template-columns: 7fr 1fr;
    padding: 0.5rem 1.5rem;
  }
`;

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  ${theme.mq()[0]} {
  }
`;
