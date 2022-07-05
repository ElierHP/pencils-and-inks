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
            <Link key={product.id} href="/">
              <ListItem>
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

                <p>{product.title}</p>
                <Price>${product.price}</Price>
                <Button>Add To Cart</Button>
              </ListItem>
            </Link>
          ))}
        </List>
        {isLoading && <LoadingMsg>Loading products... please wait.</LoadingMsg>}
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
  width: 150px;
  height: 150px;
  ${theme.mq()[3]} {
    width: 250px;
    height: 250px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Price = styled.p`
  font-weight: ${theme.fontWeights.bold};
  font-size: 2rem;
  padding: 0.5rem 0;
`;

const ErrorMsg = styled.p`
  color: ${theme.colors.error};
`;

const LoadingMsg = styled.p`
  color: ${theme.colors.warning};
`;
