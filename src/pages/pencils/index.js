import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import { useQuery } from "react-query";
import { getProducts } from "../../utils/api/products";
import {
  ErrorMessage,
  PageContainer,
  ProductBanner,
  ProductSection,
  Spinner,
} from "../../components/ui";
import Filter from "../../components/Filter";
import ProductList from "../../components/ProductList";
import ProductNav from "../../components/ProductNav";
import useCheckbox from "../../hooks/useCheckbox";

export default function Pencils() {
  // Fetch query, changing this will refetch with new url.
  const [query, setQuery] = useState("/products?category=pencils");

  // Array of objects with all the checkbox states, gets passed to the <Filter /> component.
  const checkboxes = useCheckbox(
    "Featured",
    "Graphite Pencil",
    "Colored Pencil"
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
          {!isLoading && !isError ? (
            <ProductList products={products} />
          ) : (
            <>
              {/* Loading Display */}
              {isLoading && <Spinner />}

              {/* Error Display */}
              {isError && (
                <ErrorMessage>Error: Couldn't load products.</ErrorMessage>
              )}
            </>
          )}
        </ProductSection>
      </PageContainer>
    </Layout>
  );
}
