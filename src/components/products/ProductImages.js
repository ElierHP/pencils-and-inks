import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import theme from "../../styles/theme";

export default function ProductImages({
  images,
  title,
  mainImage,
  setIsZoomed,
  setCurrentImage,
}) {
  const ImageClick = (image) => {
    setIsZoomed(true);
    setCurrentImage(image);
  };
  return (
    <ImageContainer>
      <Images>
        {images.map((image) => (
          <SideImage onClick={() => ImageClick(image)} key={image}>
            <Image
              alt={image}
              src={image}
              layout="responsive"
              width={100}
              height={100}
              objectFit="cover"
              quality={100}
            />
          </SideImage>
        ))}
      </Images>
      <MainImage onClick={() => ImageClick(mainImage)}>
        <Image
          alt={`${title}-image`}
          src={mainImage}
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
          quality={100}
        />
      </MainImage>
    </ImageContainer>
  );
}

// Styles
const ImageContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  ${theme.mq()[1]} {
    grid-template-columns: 1fr 5fr;
  }
  ${theme.mq()[2]} {
    grid-template-columns: 1fr 3fr;
  }
`;

const Images = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem;
`;

const SideImage = styled.div`
  cursor: pointer;
`;

const MainImage = styled.div`
  cursor: pointer;
`;
