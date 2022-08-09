import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useQuery } from "react-query";
import { getProducts } from "../../utils/api/products";
import { PageContainer, HandleAsync } from "../../components/ui";
import Filter from "../../components/Filter";
import {
  ProductList,
  ProductNav,
  ProductSection,
  ProductBanner,
} from "../../components/products";
import useCheckbox from "../../hooks/useCheckbox";

export default function Products() {
  // Shows & hides the filters in mobile view.
  const [showFilters, setShowFilters] = useState(false);

  // Fetch query, changing this will refetch with new url.
  const [query, setQuery] = useState("/products");

  // Get Request for all products
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products", query], () => getProducts(query));

  // Array of objects with all the checkbox states, gets passed to the <Filter /> component.
  const checkboxes = useCheckbox(
    [
      "Featured",
      "Graphite Pencil",
      "Colored Pencil",
      "Mechanical Pencil",
      "Sketch Paper",
      "Sketchbooks",
      "Artist Inks",
      "Inking Pens",
    ],
    true,
    true
  );

  return (
    <Layout>
      <PageContainer>
        <ProductNav
          links={[
            { url: "/", label: "Home" },
            { url: "/products", label: "All Products" },
          ]}
        />

        <ProductBanner
          title="All Products"
          src="/city-drawing.jpg"
          alt="city-drawing"
        />

        <ProductSection>
          {/* Filter Settings */}
          <Filter
            checkboxes={checkboxes}
            setQuery={setQuery}
            category="all"
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />

          {/* Display Product List & Handle Errors/Loading */}
          <HandleAsync isLoading={isLoading} isError={isError}>
            <ProductList
              products={products}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            />
          </HandleAsync>
        </ProductSection>
      </PageContainer>
    </Layout>
  );
}
