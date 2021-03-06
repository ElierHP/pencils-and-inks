import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Button from "./Button";
import Logo from "./Logo";

export default function Banner() {
  return (
    <Section>
      <Wrapper>
        <Logo size={3.5} href={"/products"} />
        <Paragraph>
          Top quality products to unleash your inner creativity!
        </Paragraph>
        <Button href="/products" isLink={true}>
          View Products
        </Button>
      </Wrapper>

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
    </Section>
  );
}

// Styles
const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  z-index: 1;
  padding: 0 2rem;
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
