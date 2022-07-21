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
import ProductNav from "../../components/ProductNav";

export default function Pencils() {
  // Fetch query, changing this will refetch with new url.
  const [query, setQuery] = useState("/products?category=pencils");

  // Checkbox states
  const [graphiteChecked, setGraphiteChecked] = useState(false);
  const [coloredChecked, setColoredChecked] = useState(false);
  const [featured, setFeatured] = useState(false);

  // Get Request for products with pencils category
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products", query], () => getProducts(query));

  // Checkbox settings passed to <Filter /> component
  const checkboxes = [
    {
      checked: featured,
      setChecked: setFeatured,
      label: "Featured Products",
      tag: "featured",
    },
    {
      checked: graphiteChecked,
      setChecked: setGraphiteChecked,
      label: "Graphite Pencils",
      tag: "graphite-pencil",
    },
    {
      checked: coloredChecked,
      setChecked: setColoredChecked,
      label: "Colored Pencils",
      tag: "colored-pencils",
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
          <Filter
            checkboxes={checkboxes}
            setQuery={setQuery}
            category="pencils"
          />

          {/* Display Product List */}
          <ProductList
            isLoading={isLoading}
            isError={isError}
            products={products}
          />
        </ProductSection>
      </PageContainer>
    </Layout>
  );
}
