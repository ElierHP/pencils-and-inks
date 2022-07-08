import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import theme from "../styles/theme";
import { Section, Container } from "./ui";
import { v4 as uuidv4 } from "uuid";

const categoryData = [
  {
    title: "Featured",
    url: "/featured",
    img: "https://images.ctfassets.net/f1fikihmjtrp/31Dkj7MHIh4Rx28iaTXiMY/0b9e72dd920a6aaf86155cfc55bf6fd3/82410-1012-M-4ww.jpg?q=80&w=400",
    key: uuidv4(),
  },
  {
    title: "Pencils",
    url: "/pencils",
    img: "https://images.ctfassets.net/f1fikihmjtrp/31Dkj7MHIh4Rx28iaTXiMY/0b9e72dd920a6aaf86155cfc55bf6fd3/82410-1012-M-4ww.jpg?q=80&w=400",
    key: uuidv4(),
  },
  {
    title: "Papers",
    url: "/papers",
    img: "https://images.ctfassets.net/f1fikihmjtrp/31Dkj7MHIh4Rx28iaTXiMY/0b9e72dd920a6aaf86155cfc55bf6fd3/82410-1012-M-4ww.jpg?q=80&w=400",
    key: uuidv4(),
  },
  {
    title: "Inks",
    url: "/inks",
    img: "https://images.ctfassets.net/f1fikihmjtrp/31Dkj7MHIh4Rx28iaTXiMY/0b9e72dd920a6aaf86155cfc55bf6fd3/82410-1012-M-4ww.jpg?q=80&w=400",
    key: uuidv4(),
  },
];

export default function Category() {
  return (
    <Section>
      <Container>
        <Title>Shop by Category</Title>
        <List>
          {categoryData.map((product) => (
            <Link key={product.key} href={product.url}>
              <li>
                <ImageContainer>
                  <Image
                    alt={product.title}
                    src={product.img}
                    layout="fill"
                    objectFit="cover"
                  />
                </ImageContainer>
                <Paragraph>{product.title}</Paragraph>
              </li>
            </Link>
          ))}
        </List>
      </Container>
    </Section>
  );
}

// Styles
const Title = styled.h2`
  margin-bottom: 4rem;
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  cursor: pointer;
  flex-wrap: wrap;
  gap: 3rem;
  ${theme.mq()[0]} {
    justify-content: space-between;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  ${theme.mq()[2]} {
    width: 250px;
    height: 250px;
  }
`;

const Paragraph = styled.p`
  font-weight: ${theme.fontWeights.bold};
  text-align: center;
`;
