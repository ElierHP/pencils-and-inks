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

export default function GraphitePencils() {
  // Fetch query, changing this will refetch with new url.
  const [query, setQuery] = useState(
    "/products?category=pencils&tags=graphite-pencil"
  );

  // Checkbox states
  const [featured, setFeatured] = useState(false);

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
          <Filter
            checkboxes={checkboxes}
            setQuery={setQuery}
            category="pencils"
            queryTag={"&tags=graphite-pencil"}
          />

          {/* Display Product List */}
          {!isLoading && !isError ? (
            <ProductList products={products} />
          ) : (
            <>
              {/* Loading Display */}
              {isLoading && <p>Loading products... please wait.</p>}

              {/* Error Display */}
              {isError && <p>Error: Couldn't load products.</p>}
            </>
          )}
        </ProductSection>
      </PageContainer>
    </Layout>
  );
}
