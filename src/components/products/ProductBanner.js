import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Image from "next/image";

export default function ProductBanner({ title, src, alt }) {
  return (
    <ImageContainer>
      <Title>{title}</Title>
      <Image
        alt={alt}
        src={src}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
      />
    </ImageContainer>
  );
}

// Styles
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
