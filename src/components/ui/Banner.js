import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Button from "./Button";

export default function Banner() {
  return (
    <Main>
      <Section>
        <Heading>{"Pencils&Inks"}</Heading>
        <Paragraph>
          Top quality products to unleash your inner creativity!
        </Paragraph>
        <Button href="/pencils">View Products</Button>
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
  padding: 0 2rem;
`;

const Heading = styled.h1`
  margin: 0;
`;

const Paragraph = styled.p`
  text-align: center;
`;
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;
