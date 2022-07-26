import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

export default function ProductImages({ images, title, mainImage }) {
  return (
    <ImageContainer>
      <Images>
        {images.map((image) => (
          <Image
            alt={image}
            src={image}
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
            quality={100}
          />
        ))}
      </Images>
      <Image
        alt={`${title}-image`}
        src={mainImage}
        layout="responsive"
        width={100}
        height={100}
        objectFit="cover"
        quality={100}
      />
    </ImageContainer>
  );
}

// Styles
const ImageContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
`;

const Images = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem;
`;
