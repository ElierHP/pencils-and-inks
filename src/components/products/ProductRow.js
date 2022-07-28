import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import theme from "../../styles/theme";
import Link from "next/link";
import { Button, List, ImageContainer } from "../ui";

export default function ProductRow({ products }) {
  return (
    <List>
      {products.map((product) => (
        <ListItem key={product.id}>
          {/* Clicking links to product page. */}
          <Link href={`/products/${product.id}`}>
            <a>
              <ImageContainer>
                <Image
                  alt={product.title}
                  src={product.images.split(",")[0]}
                  layout="fill"
                  objectFit="cover"
                />
              </ImageContainer>

              <ProductTitle>{product.title}</ProductTitle>
              <Price>${product.price}</Price>
            </a>
          </Link>

          {/* Button - Clicking adds to shopping cart. */}
          <div>
            <Button>Add To Cart</Button>
          </div>
        </ListItem>
      ))}
    </List>
  );
}

// Styles
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductTitle = styled.p`
  width: 130px;
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
