import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { Button } from "../../components/ui";
import Link from "next/link";
import Image from "next/image";

export default function ProductList({ products }) {
  return (
    <div>
      <Sort>
        <h3>Sort By: </h3>
        <Select name="product-sort" onChange={(e) => console.log("Sort")}>
          <option value="default">Default</option>
          <option value="title-asc">Title Ascending</option>
          <option value="title-desc">Title Descending</option>
          <option value="price-asc">Price Ascending</option>
          <option value="price-desc">Price Descending</option>
        </Select>
      </Sort>
      <List>
        {products.map((product) => (
          <ListItem key={product.id}>
            {/* Clicking links to product page. */}
            <Link href={`/products/${product.id}`}>
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
            <BtnContainer>
              <Button>Add To Cart</Button>
            </BtnContainer>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

// Styles
const Sort = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Select = styled.select`
  border-color: ${theme.colors.neutral};
  padding: 0.2rem 0.5rem;
`;

const List = styled.ul`
  /* Galaxy Fold Breakpoint */
  @media only screen and (max-width: 350px) {
    grid-template-columns: 1fr;
  }

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  cursor: pointer;
  ${theme.mq()[0]} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  ${theme.mq()[0]} {
    width: 150px;
    height: 150px;
  }
  ${theme.mq()[2]} {
    width: 250px;
    height: 250px;
  }
`;

const ProductTitle = styled.p`
  width: 150px;
  ${theme.mq()[2]} {
    width: 250px;
  }
`;

const Price = styled.p`
  font-weight: ${theme.fontWeights.bold};
  font-size: 2rem;
  padding: 1rem 0;
`;

const BtnContainer = styled.div`
  margin-bottom: 2rem;
`;
