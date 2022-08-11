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
        <FlexContainer>
          <CloseIcon>
            <IoClose
              size={40}
              color="inherit"
              onClick={() => setIsZoomed(false)}
            />
          </CloseIcon>
          <LeftArrow>
            <FiArrowLeft
              size={40}
              color="inherit"
              onClick={() => handleLeftArrow()}
            />
          </LeftArrow>
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

          <RightArrow>
            <FiArrowRight
              size={40}
              color="inherit"
              onClick={() => handleRightArrow()}
            />
          </RightArrow>
        </FlexContainer>
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
`;

const FlexContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  margin: auto;
  ${theme.mq()[1]} {
    height: 600px;
    width: 600px;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  cursor: pointer;
  transition: ${theme.transition.primary};
  color: ${theme.colors.neutral};
  &:hover {
    color: ${theme.colors.btnHover};
  }
`;

const LeftArrow = styled.div`
  position: absolute;
  bottom: 10%;
  left: 30%;
  cursor: pointer;
  transition: ${theme.transition.primary};
  color: ${theme.colors.neutral};
  ${theme.mq()[0]} {
    position: relative;
    bottom: initial;
    left: initial;
  }

  &:hover {
    color: ${theme.colors.btnHover};
  }
`;

const RightArrow = styled.div`
  position: absolute;
  bottom: 10%;
  right: 30%;
  cursor: pointer;
  transition: ${theme.transition.primary};
  color: ${theme.colors.neutral};
  ${theme.mq()[0]} {
    position: relative;
    bottom: initial;
    right: initial;
  }

  &:hover {
    color: ${theme.colors.btnHover};
  }
`;
