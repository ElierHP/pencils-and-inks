import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useQuery } from "react-query";
import { getProducts } from "../../utils/api/products";
import { PageContainer } from "../../components/ui";
import { MdKeyboardArrowRight } from "react-icons/md";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Image from "next/image";
import Link from "next/link";
import Filter from "../../components/Filter";
import ProductList from "../../components/ProductList";
import filterPencils from "../../utils/filters/filterPencils";

export default function Pencils() {
  const [graphiteChecked, setGraphiteChecked] = useState(false);
  const [coloredChecked, setColoredChecked] = useState(false);
  const [featured, setFeatured] = useState(false);

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", () => getProducts("/products?category=pencil"));

  // Filter products based on the filter checkbox. Pass it down to ProductList component.
  const showProducts = filterPencils(
    products,
    graphiteChecked,
    coloredChecked,
    featured
  );

  console.log(showProducts);
  return (
    <Layout>
      <PageContainer>
        <PageNav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <MdKeyboardArrowRight color={theme.colors.neutral} size={20} />
          <Page>Pencils</Page>
        </PageNav>

        <ImageContainer>
          <Title>Pencils</Title>
          <Image
            alt={"flower-drawing"}
            src={"/flower-drawing.jpg"}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </ImageContainer>
        <Section>
          {/* Filter Settings */}
          <Filter
            graphiteChecked={graphiteChecked}
            setGraphiteChecked={setGraphiteChecked}
            coloredChecked={coloredChecked}
            setColoredChecked={setColoredChecked}
            featured={featured}
            setFeatured={setFeatured}
          />

          {/* Display Product List */}
          <ProductList
            isLoading={isLoading}
            isError={isError}
            showProducts={showProducts}
          />
        </Section>
      </PageContainer>
    </Layout>
  );
}

// Styles
const PageNav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

const Page = styled.span`
  color: ${theme.colors.neutralDark};
`;

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

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: ${theme.space.section}rem 0;
  gap: 1rem;
  ${theme.mq()[1]} {
    grid-template-columns: 1fr 4fr;
  }
`;
