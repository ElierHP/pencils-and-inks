import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import theme from "../styles/theme";
import Container from "./ui/Container";

const categoryData = [
  {
    title: "Featured",
    url: "/featured",
    img: "https://images.ctfassets.net/f1fikihmjtrp/31Dkj7MHIh4Rx28iaTXiMY/0b9e72dd920a6aaf86155cfc55bf6fd3/82410-1012-M-4ww.jpg?q=80&w=400",
    key: 0,
  },
  {
    title: "Pencils",
    url: "/pencils",
    img: "https://images.ctfassets.net/f1fikihmjtrp/31Dkj7MHIh4Rx28iaTXiMY/0b9e72dd920a6aaf86155cfc55bf6fd3/82410-1012-M-4ww.jpg?q=80&w=400",
    key: 100,
  },
  {
    title: "Papers",
    url: "/papers",
    img: "https://images.ctfassets.net/f1fikihmjtrp/31Dkj7MHIh4Rx28iaTXiMY/0b9e72dd920a6aaf86155cfc55bf6fd3/82410-1012-M-4ww.jpg?q=80&w=400",
    key: 200,
  },
  {
    title: "Inks",
    url: "/inks",
    img: "https://images.ctfassets.net/f1fikihmjtrp/31Dkj7MHIh4Rx28iaTXiMY/0b9e72dd920a6aaf86155cfc55bf6fd3/82410-1012-M-4ww.jpg?q=80&w=400",
    key: 300,
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
              <ListItem>
                <ImageContainer>
                  <Image
                    alt={product.title}
                    src={product.img}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority={true}
                  />
                </ImageContainer>
                <Paragraph>{product.title}</Paragraph>
              </ListItem>
            </Link>
          ))}
        </List>
      </Container>
    </Section>
  );
}

// Styles
const Section = styled.section`
  text-align: center;
  padding: ${theme.space.section}rem 0;
`;

const Title = styled.h2`
  margin-bottom: 4rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  cursor: pointer;
  flex-wrap: wrap;
  gap: 3rem;
`;

const ListItem = styled.li`
  width: 150px;
  height: 150px;
  ${theme.mq()[2]} {
    width: 200px;
    height: 200px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Paragraph = styled.p`
  font-weight: ${theme.fontWeights.bold};
`;
