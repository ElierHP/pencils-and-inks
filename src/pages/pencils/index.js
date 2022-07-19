import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useQuery } from "react-query";
import { getProducts } from "../../utils/api/products";
import { PageContainer, Button } from "../../components/ui";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Image from "next/image";
import Link from "next/link";
import Filter from "../../components/Filter";

export default function Pencils() {
  const [graphiteChecked, setGraphiteChecked] = useState(false);
  const [coloredChecked, setColoredChecked] = useState(false);

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", () => getProducts("/products?category=pencil"));

  // Filter products based on the filter checkbox.
  const filterProducts = () => {
    const filteredProducts = products.filter((product) => {
      if (graphiteChecked && coloredChecked) {
        return (
          product.tags.includes("graphite-pencil") ||
          product.tags.includes("colored-pencil")
        );
      } else if (graphiteChecked) {
        return product.tags.includes("graphite-pencil");
      } else if (coloredChecked) {
        return product.tags.includes("colored-pencil");
      } else {
        return product;
      }
    });
    return filteredProducts;
  };

  return (
    <Layout>
      <PageContainer>
        <PageNav>
          Home
          <MdKeyboardArrowRight color={theme.colors.neutral} size={20} />
          <Page>Pencils</Page>
        </PageNav>

        <ImageContainer>
          <Title>Pencils</Title>
          <Image
            alt={"flower-drawing"}
            src={"/flower-drawing.jpg"}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </ImageContainer>
        <Section>
          {/* Filter Settings */}
          <Filter
            graphiteChecked={graphiteChecked}
            setGraphiteChecked={setGraphiteChecked}
            coloredChecked={coloredChecked}
            setColoredChecked={setColoredChecked}
          />

          {/* Display Product List */}
          <List>
            {!isLoading && !isError && (
              <>
                {filterProducts().map((product) => (
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
              </>
            )}
          </List>
        </Section>
      </PageContainer>
    </Layout>
  );
}

// Styles
const PageNav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

const Page = styled.span`
  color: ${theme.colors.neutralDark};
`;

const Title = styled.h1`
  position: absolute;
  top: 2.5rem;
  left: 2.5rem;
  z-index: 1;
  font-weight: ${theme.fontWeights.bold};
  text-align: center;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  ${theme.mq()[0]} {
  }
`;

// Contains Filter and Products
const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: ${theme.space.section}rem 0;
  ${theme.mq()[1]} {
    grid-template-columns: 1fr 3fr;
  }
`;

// Products
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
