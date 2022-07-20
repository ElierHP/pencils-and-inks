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

export default function Pencils() {
  // Checkbox states
  const [graphiteChecked, setGraphiteChecked] = useState(false);
  const [coloredChecked, setColoredChecked] = useState(false);
  const [featured, setFeatured] = useState(false);

  // Get Request for products with pencils category
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", () => getProducts("/products?category=pencil"));

  // Filter products based on the filter checkbox. Pass it down to ProductList component.
  const showProducts = filterPencils(
    products,
    featured,
    graphiteChecked,
    coloredChecked
  );

  // Checkbox settings passed to <Filter /> component
  const checkboxes = [
    {
      checked: featured,
      setChecked: setFeatured,
      label: "Featured Products",
    },
    {
      checked: graphiteChecked,
      setChecked: setGraphiteChecked,
      label: "Graphite Pencils",
    },
    {
      checked: coloredChecked,
      setChecked: setColoredChecked,
      label: "Colored Pencils",
    },
  ];
  return (
    <Layout>
      <PageContainer>
        <ProductNav links={["Home", "Pencils"]} />

        <ProductBanner
          title="Pencils"
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
