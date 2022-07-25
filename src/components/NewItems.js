import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import theme from "../styles/theme";
import { Section, Container, Button, ErrorMessage, Spinner } from "./ui";
import { useQuery } from "react-query";
import { getProducts } from "../utils/api/products";

export default function NewItems() {
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
        {!isLoading && !isError ? (
          <List>
            {products.map((product) => (
              <ListItem key={product.id}>
                {/* Clicking links to product page. */}
                <Link href="/">
                  <div>
                    <ProductImage>
                      <Image
                        alt={product.title}
                        src={product.images.split(",")[0]}
                        layout="fill"
                        objectFit="cover"
                      />
                    </ProductImage>

                    <ProductTitle>{product.title}</ProductTitle>
                    <Price>${product.price}</Price>
                  </div>
                </Link>

                {/* Button - Clicking adds to shopping cart. */}
                <div>
                  <Button>Add To Cart</Button>
                </div>
              </ListItem>
            ))}
          </List>
        ) : (
          <>
            {/* Loading Display */}
            {isLoading && <Spinner />}

            {/* Error Display */}
            {isError && (
              <ErrorMessage>Error: Couldn't load products.</ErrorMessage>
            )}
          </>
        )}
      </Container>
    </Section>
  );
}

// Styles
const Title = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  cursor: pointer;
  flex-wrap: wrap;
  gap: 3rem;
  ${theme.mq()[0]} {
    justify-content: space-between;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  ${theme.mq()[2]} {
    width: 250px;
    height: 250px;
  }
`;

const ProductTitle = styled.p`
  width: 150px;
  margin-top: 1.5rem;
  ${theme.mq()[3]} {
    width: 20ch;
  }
`;

const Price = styled.p`
  font-weight: ${theme.fontWeights.bold};
  font-size: 2rem;
  padding: 1rem 0;
`;
