import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import axios from "axios";
import Image from "next/image";
import theme from "../styles/theme";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function NewItems() {
  const [latest, setLatest] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //   Get the 4 newest products from server.
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await axios
          .get("http://localhost:3000/latest")
          .then((res) => res.data);

        // Set products to latest
        setLatest(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return (
    <Section>
      <Container>
        <Title>Latest Products</Title>
        <List>
          {latest.map((product) => (
            <ListItem>
              {/* Clicking links to product page. */}
              <Link key={product.id} href="/">
                <div>
                  <ImageContainer>
                    <Image
                      alt={product.title}
                      src={product.images.split(",")[0]}
                      layout="fill"
                      objectFit="cover"
                      quality={100}
                      priority={true}
                    />
                  </ImageContainer>

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

        {/* Loading Display */}
        {isLoading && <LoadingMsg>Loading products... please wait.</LoadingMsg>}

        {/* Error Display */}
        {isError && <ErrorMsg>Error: Couldn't load products.</ErrorMsg>}
      </Container>
    </Section>
  );
}

// Styles
const Section = styled.section`
  padding: ${theme.space.section}rem 0;
`;

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
  ${theme.mq()[1]} {
    justify-content: space-between;
  }
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  ${theme.mq()[3]} {
    width: 250px;
    height: 250px;
  }
`;

const ProductTitle = styled.p`
  width: 15ch;
  ${theme.mq()[3]} {
    width: 20ch;
  }
`;

const Price = styled.p`
  font-weight: ${theme.fontWeights.bold};
  font-size: 2rem;
  padding: 1rem 0;
`;

const ErrorMsg = styled.p`
  color: ${theme.colors.error};
`;

const LoadingMsg = styled.p`
  color: ${theme.colors.warning};
`;
