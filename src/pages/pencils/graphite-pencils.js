import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useQuery } from "react-query";
import { getProducts } from "../../utils/api/products";
import {
  PageContainer,
  ProductBanner,
  ProductSection,
} from "../../components/ui";
import Filter from "../../components/Filter";
import ProductList from "../../components/ProductList";
import filterPencils from "../../utils/filters/filterPencils";
import ProductNav from "../../components/ProductNav";

export default function GraphitePencils() {
  const [featured, setFeatured] = useState(false);

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", () => getProducts("/products?category=pencil"));

  // Create array with only graphite pencils
  let graphitePencils;
  if (!isLoading) {
    graphitePencils = products.filter((product) =>
      product.tags.includes("graphite-pencil")
    );
  }

  // Filter products based on the filter checkbox. Pass it down to ProductList component.
  const showProducts = filterPencils(graphitePencils, featured);

  // Checkbox settings passed to <Filter /> component
  const checkboxes = [
    {
      checked: featured,
      setChecked: setFeatured,
      label: "Featured Products",
    },
  ];
  return (
    <Layout>
      <PageContainer>
        <ProductNav links={["Home", "Pencils", "Graphite Pencils"]} />

        <ProductBanner
          title="Graphite Pencils"
          src="/flower-drawing.jpg"
          alt="flower-drawing"
        />

        <ProductSection>
          {/* Filter Settings */}
          <Filter checkboxes={checkboxes} />

          {/* Display Product List */}
          <ProductList
            isLoading={isLoading}
            isError={isError}
            showProducts={showProducts}
          />
        </ProductSection>
      </PageContainer>
    </Layout>
  );
}
