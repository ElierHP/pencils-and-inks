import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { useQuery } from "react-query";
import { getProducts } from "../utils/api/products";
import { PageContainer, HandleAsync } from "../components/ui";
import Filter from "../components/Filter";
import {
  ProductList,
  ProductNav,
  ProductSection,
  ProductBanner,
} from "../components/products";
import useCheckbox from "../hooks/useCheckbox";
import Sort from "../components/Sort";

export default function Featured() {
  // Shows & hides the filters in mobile view.
  const [showFilters, setShowFilters] = useState(false);

  // Tracks the current sorting state.
  const [sortValue, setSortValue] = useState("default");

  // Fetch query, changing this will refetch with new url.
  const [query, setQuery] = useState("/products?tags=featured");

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
    false
  );

  return (
    <Layout>
      <PageContainer>
        <ProductNav
          links={[
            { url: "/", label: "Home" },
            { url: "/products", label: "Featured Products" },
          ]}
        />

        <ProductBanner
          title="Featured Products"
          src="/landscape-4-1.png"
          alt="landscape-4-1"
        />

        <ProductSection>
          {/* Filter Settings */}
          <Filter
            checkboxes={checkboxes}
            setQuery={setQuery}
            category="all"
            showFilters={showFilters}
            setShowFilters={setShowFilters}
            sortValue={sortValue}
          />
          <div>
            <Sort
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              query={query}
              setQuery={setQuery}
              category="all"
              setSortValue={setSortValue}
            />
            {/* Display Product List & Handle Errors/Loading */}
            <HandleAsync isLoading={isLoading} isError={isError}>
              <ProductList products={products} />
            </HandleAsync>
          </div>
        </ProductSection>
      </PageContainer>
    </Layout>
  );
}
