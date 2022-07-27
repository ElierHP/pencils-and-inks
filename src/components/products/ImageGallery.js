import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Container } from "../ui";

export default function ImageGallery({ images, currentImage, setIsZoomed }) {
  const [currentIndex, setCurrentIndex] = useState(
    images.indexOf(currentImage)
  );

  const handleRightArrow = () => {
    if (images.length - 1 > currentIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleLeftArrow = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  return (
    <ZoomedImage>
      <Container>
        <CloseIcon>
          <IoClose
            size={40}
            color="inherit"
            onClick={() => setIsZoomed(false)}
          />
        </CloseIcon>
        <ImageContainer>
          <Image
            alt={`product-image`}
            src={images[currentIndex]}
            layout="responsive"
            width={100}
            height={100}
            objectFit="cover"
            quality={100}
          />
        </ImageContainer>
        <LeftArrow>
          <FiArrowLeft
            size={40}
            color="inherit"
            onClick={() => handleLeftArrow()}
          />
        </LeftArrow>
        <RightArrow>
          <FiArrowRight
            size={40}
            color="inherit"
            onClick={() => handleRightArrow()}
          />
        </RightArrow>
      </Container>
    </ZoomedImage>
  );
}

// Styles
const ZoomedImage = styled.div`
  position: fixed;
  height: 100vh;
  background: ${theme.colors.light};
  width: 100%;
  top: 0;
  left: 0;
  padding-top: 5rem;
`;

const ImageContainer = styled.div`
  position: relative;
  max-height: 600px;
  max-width: 600px;
  margin: auto;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: -2.5rem;
  right: 0;
  cursor: pointer;
  transition: ${theme.transition.primary};
  color: ${theme.colors.neutral};
  &:hover {
    color: ${theme.colors.btnHover};
  }
`;

const LeftArrow = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  cursor: pointer;
  transition: ${theme.transition.primary};
  color: ${theme.colors.neutral};
  &:hover {
    color: ${theme.colors.btnHover};
  }
`;

const RightArrow = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  cursor: pointer;
  transition: ${theme.transition.primary};
  color: ${theme.colors.neutral};
  &:hover {
    color: ${theme.colors.btnHover};
  }
`;
