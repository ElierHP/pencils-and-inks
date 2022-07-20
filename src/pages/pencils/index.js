import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useQuery } from "react-query";
import { getProducts } from "../../utils/api/products";
import { PageContainer, ProductBanner } from "../../components/ui";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Filter from "../../components/Filter";
import ProductList from "../../components/ProductList";
import filterPencils from "../../utils/filters/filterPencils";
import ProductNav from "../../components/ProductNav";

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

  return (
    <Layout>
      <PageContainer>
        <ProductNav links={["Home", "Pencils"]} category="pencils" />

        <ProductBanner
          title="Pencils"
          src="/flower-drawing.jpg"
          alt="flower-drawing"
        />

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
const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: ${theme.space.section}rem 0;
  gap: 1rem;
  ${theme.mq()[1]} {
    grid-template-columns: 1fr 4fr;
  }
`;
