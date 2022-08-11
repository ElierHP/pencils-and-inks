import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useQuery } from "react-query";
import { getProducts } from "../../utils/api/products";
import { PageContainer, HandleAsync } from "../../components/ui";
import Filter from "../../components/Filter";
import {
  ProductList,
  ProductNav,
  ProductBanner,
  ProductSection,
} from "../../components/products";
import useCheckbox from "../../hooks/useCheckbox";
import Sort from "../../components/Sort";

export default function InkingPens() {
  // Shows & hides the filters in mobile view.
  const [showFilters, setShowFilters] = useState(false);

  // Fetch query, changing this will refetch with new url.
  const [query, setQuery] = useState("/products?category=inks&tags=inking-pen");

  // Array of objects with all the checkbox states, gets passed to the <Filter /> component.
  const checkboxes = useCheckbox(["Inking Pen", "Featured", "Arist Ink"], true);

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products", query], () => getProducts(query));

  return (
    <Layout>
      <PageContainer>
        <ProductNav
          links={[
            { label: "Home", url: "/" },
            { label: "Inks", url: "/inks" },
            { label: "Inking Pens" },
          ]}
        />

        <ProductBanner
          title="Inking Pens"
          src="/flower-drawing.jpg"
          alt="flower-drawing"
        />

        <ProductSection>
          {/* Filter Settings */}
          <Filter
            checkboxes={checkboxes}
            setQuery={setQuery}
            category="inks"
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
          <div>
            {/* Sort products */}
            <Sort
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              query={query}
              setQuery={setQuery}
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
