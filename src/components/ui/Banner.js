import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Image from "next/image";
import Container from "./Container";

export default function Banner() {
  return (
    <Main>
      <Container>
        <Section>
          <Heading>{"Pencils&Inks"}</Heading>
          <p>Top quality products to unleash your inner creativity!</p>
          <button>View Products</button>
        </Section>
        <BackgroundImage>
          <Image
            alt="main-banner"
            src="/main-banner.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </BackgroundImage>
      </Container>
    </Main>
  );
}

// Styles
const Main = styled.main`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 1;
`;

const Heading = styled.h1`
  margin: 0;
`;

const BackgroundImage = styled.div`
  z-index: -1;
`;
