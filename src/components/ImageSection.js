import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import theme from "../styles/theme";
import { Section, Container, Logo } from "./ui";

export default function ImageSection() {
  return (
    <Section>
      <Container>
        <Wrapper>
          <Link href="/about">
            <MainImage>
              <LogoContainer>
                <Logo isLink={false} size={2} />
              </LogoContainer>
              <Image
                alt={"city-drawing"}
                src={"/city-drawing.jpg"}
                layout="fill"
                objectFit="cover"
              />
            </MainImage>
          </Link>
          <ImageGroup>
            <Link href="/pencils/graphite-pencils">
              <ImageContainer>
                <Title>Drawing</Title>
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
            <Link href="/papers/sketchbooks">
              <ImageContainer>
                <Title>Sketchbook</Title>
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

const LogoContainer = styled.div`
  position: absolute;
  top: 2rem;
  width: 100%;
  text-align: center;
  z-index: 1;
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

const Title = styled.a`
  position: absolute;
  top: 2rem;
  width: 100%;
  z-index: 1;
  font-weight: ${theme.fontWeights.bold};
  text-align: center;
  transition: ${theme.transition.primary};
  &:hover {
    color: ${theme.colors.hover};
  }
  ${theme.mq()[0]} {
    text-align: left;
    left: 2rem;
  }
`;
