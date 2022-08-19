import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import theme from "../../styles/theme";
import { List, Ratings, ListItem, CartButton } from "../ui";

export default function SimilarProducts({ products }) {
  return (
    <List>
      {products.map((product) => (
        <ListItem key={product.id}>
          {/* Clicking links to product page. */}
          <a href={`/products/${product.id}`}>
            <Image
              alt={product.title}
              src={product.images.split(",")[0]}
              layout="responsive"
              objectFit="cover"
              height={100}
              width={100}
            />

            <ProductTitle>{product.title}</ProductTitle>
            <PriceContainer>
              <Price>${product.price}</Price>
              <Ratings rating={product.rating} />
            </PriceContainer>
          </a>

          {/* Button - Clicking adds to shopping cart. */}
          <BtnContainer>
            <CartButton id={product.id} />
          </BtnContainer>
        </ListItem>
      ))}
    </List>
  );
}

// Styles
const ProductTitle = styled.p`
  width: 100%;
  margin-top: 0.5rem;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.p`
  font-weight: ${theme.fontWeights.bold};
  font-size: 2rem;
  padding: 1rem 0;
`;

const BtnContainer = styled.div`
  margin-bottom: 2rem;
`;
