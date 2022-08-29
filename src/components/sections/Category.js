import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Image from "next/image";
import theme from "../../styles/theme";
import { Section, Container, List, ListItem } from "../ui";
import { v4 as uuidv4 } from "uuid";

const categoryData = [
  {
    title: "Featured",
    url: "/featured",
    img: "https://cdn.shopify.com/s/files/1/1903/8473/products/professional-colored-pencils-set-of-120_I1SauiIg_1478x1477.jpg?v=1652891151",
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
    img: "https://cdn.shopify.com/s/files/1/1903/8473/products/drawing-pad-18x24-2-pack_Q7TTjjJW_648x700.jpg?v=1652889216",
    key: uuidv4(),
  },
  {
    title: "Inks",
    url: "/inks",
    img: "https://cdn.shopify.com/s/files/1/1903/8473/products/roller-ball-pens-set-of-20-pcs-black-0-5mm-point_uCqBEJY3_1275x1459.jpg?v=1652891108",
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
            <ListItem key={product.key}>
              {/* Clicking links to product page. */}
              <Link href={product.url}>
                <a>
                  <Image
                    alt={product.title}
                    src={product.img}
                    layout="responsive"
                    objectFit="cover"
                    height={100}
                    width={100}
                  />

                  <Paragraph>{product.title}</Paragraph>
                </a>
              </Link>
            </ListItem>
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

const Paragraph = styled.p`
  font-weight: ${theme.fontWeights.bold};
  text-align: center;
  margin-top: 1.5rem;
`;
