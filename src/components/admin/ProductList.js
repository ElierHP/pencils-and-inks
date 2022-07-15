import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Button from "../ui/Button";
import { deleteProduct } from "../../utils/api/products";

export default function ProductList({ products, isLoading, isError, refetch }) {
  const [editing, setEditing] = useState(false);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    refetch();
  };

  return (
    <>
      {/* Check for loading & errors, then display UL. */}
      {!isLoading && !isError ? (
        <>
          {/* If not editing, display list, otherwise display edit form */}
          <List>
            {products.map((product) => (
              <ListItem key={uuidv4()}>
                <a href="/">{product.title}</a>
                <BtnContainer>
                  <Button onClick={() => setEditing(!editing)}>Edit</Button>
                  <Button onClick={() => handleDelete(product.id)}>
                    Delete
                  </Button>
                </BtnContainer>
              </ListItem>
            ))}
          </List>
        </>
      ) : (
        <>
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
  padding: 6rem;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 7fr 1fr;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-radius: 0.4rem;
  &:hover {
    background: ${theme.colors.neutralLight};
  }
`;

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
