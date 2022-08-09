import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { Ratings, ListItem, CartButton } from "../../components/ui";
import Link from "next/link";
import Image from "next/image";

export default function ProductList({ products }) {
  return (
    <div>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            {/* Clicking links to product page. */}
            <Link href={`/products/${product.id}`}>
              <div>
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
              </div>
            </Link>

            {/* Button - Clicking adds to shopping cart. */}
            <BtnContainer>
              <CartButton id={product.id} />
            </BtnContainer>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

// Styles
const List = styled.ul`
  /* Galaxy Fold Breakpoint */
  @media only screen and (max-width: 350px) {
    grid-template-columns: 1fr;
  }

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  justify-items: center;
  cursor: pointer;
  ${theme.mq()[0]} {
    grid-template-columns: repeat(3, 1fr);
    justify-items: left;
  }
`;

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
