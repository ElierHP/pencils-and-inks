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

export default function Pencils() {
  // Fetch query, changing this will refetch with new url.
  const [query, setQuery] = useState("/products?category=pencils");

  // Array of objects with all the checkbox states, gets passed to the <Filter /> component.
  const checkboxes = useCheckbox(
    ["Featured", "Graphite Pencil", "Colored Pencil"],
    true,
    true
  );

  // Get Request for products with pencils category
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
            { url: "/", label: "Home" },
            { url: "/pencils", label: "Pencils" },
          ]}
        />

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

          {/* Display Product List & Handle Errors/Loading */}
          <HandleAsync isLoading={isLoading} isError={isError}>
            <ProductList products={products} />
          </HandleAsync>
        </ProductSection>
      </PageContainer>
    </Layout>
  );
}
