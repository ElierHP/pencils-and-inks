import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import theme from "../../styles/theme";
import Link from "next/link";
import { Button, List, Ratings, ListItem } from "../ui";

export default function ProductRow({ products }) {
  return (
    <List>
      {products.map((product) => (
        <ListItem key={product.id}>
          {/* Clicking links to product page. */}
          <Link href={`/products/${product.id}`}>
            <a>
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
          </Link>

          {/* Button - Clicking adds to shopping cart. */}
          <BtnContainer>
            <Button>Add To Cart</Button>
          </BtnContainer>
        </ListItem>
      ))}
    </List>
  );
}

// Styles
const ProductTitle = styled.p`
  width: 100%;
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
