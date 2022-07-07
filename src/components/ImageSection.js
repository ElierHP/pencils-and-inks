import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import theme from "../styles/theme";
import { Section, Container } from "./ui";

export default function ImageSection() {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Link href="/">
            <MainImage>
              <Image
                alt={"city-drawing"}
                src={"/city-drawing.jpg"}
                layout="fill"
                objectFit="cover"
              />
            </MainImage>
          </Link>
          <ImageGroup>
            <Link href="/">
              <ImageContainer>
                <Image
                  alt={"bird-drawing"}
                  src={"/bird-drawing.jpg"}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority={true}
                />
              </ImageContainer>
            </Link>
            <Link href="/">
              <ImageContainer>
                <Image
                  alt={"flower-drawing"}
                  src={"/flower-drawing.jpg"}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority={true}
                />
              </ImageContainer>
            </Link>
          </ImageGroup>
        </Wrapper>
      </Container>
    </Section>
  );
}

// Styles
const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  ${theme.mq()[0]} {
    flex-direction: row;
    gap: 3rem;
  }
`;

const MainImage = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  cursor: pointer;
  ${theme.mq()[0]} {
    height: 350px;
    width: 65%;
  }
  ${theme.mq()[1]} {
    height: 550px;
  }
`;

const ImageGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  height: 150px;
  cursor: pointer;
  ${theme.mq()[0]} {
    flex-direction: column;
    height: 350px;
    width: 35%;
    gap: 3rem;
  }
  ${theme.mq()[1]} {
    height: 550px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ${theme.mq()[0]} {
    height: 50%;
  }
`;
