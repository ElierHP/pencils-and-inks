import React, { useState } from "react";
import Layout from "../../../components/layout/Layout";
import { HandleAsync, PageContainer } from "../../../components/ui";
import styled from "@emotion/styled";
import theme from "../../../styles/theme";
import { BASE_URL } from "../../../utils/api";
import { formatCategory, formatTags } from "../../../utils/formatText";
import {
  ProductImages,
  ProductNav,
  ProductInfo,
  ImageGallery,
  SimilarProducts,
} from "../../../components/products";
import { useQuery } from "react-query";
import { getSimilarProducts } from "../../../utils/api/products";
import { v4 as uuidv4 } from "uuid";
import Reviews from "../../../components/Reviews";

function Index({ product }) {
  // Destructure all product data.
  const { title, id, category, tags, sku, price, rating } = product;

  const mainImage = product.images.split(",")[0];
  const images = product.images.split(",");
  images.shift();

  const description = product.description.split("\n");

  // States needed for zoomed in gallery.
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Queries
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", () => getSimilarProducts(category, tags, sku));

  return (
    <>
      {/* Display product page */}
      {!isZoomed ? (
        <Layout>
          <PageContainer>
            {/* Top Product Navbar */}
            <ProductNav
              links={[
                { label: "Home", url: "/" },
                {
                  label: formatCategory(category),
                  url: `/${product.category}`,
                },
                {
                  label: formatTags(tags.split(",")[0]),
                  url: `/${category}/${tags.split(",")[0]}s`,
                },
                {
                  label: sku,
                  url: `/products/${id}`,
                },
              ]}
            />
            {/* Main Product Images + Information */}
            <MainProduct>
              <ProductImages
                mainImage={mainImage}
                images={images}
                title={title}
                setIsZoomed={setIsZoomed}
                setCurrentImage={setCurrentImage}
              />
              <ProductInfo
                title={title}
                sku={sku}
                price={price}
                rating={rating}
                id={id}
              />
            </MainProduct>

            <Flex>
              <section>
                {/* Large Description */}
                <Title>Description</Title>
                <div>
                  {description.map((text) => (
                    <DescText key={uuidv4()}>{text}</DescText>
                  ))}
                </div>
              </section>

              {/* Similar Products */}
              <section>
                <Title>You May Also Like</Title>
                <HandleAsync isLoading={isLoading} isError={isError}>
                  <SimilarProducts products={products} />
                </HandleAsync>
              </section>

              {/* Reviews */}
              <Reviews product_id={id} />
            </Flex>
          </PageContainer>
        </Layout>
      ) : (
        // Display gallery when user clicks on a product image.
        <ImageGallery
          images={[mainImage, ...images]}
          currentImage={currentImage}
          setIsZoomed={setIsZoomed}
        />
      )}
    </>
  );
}

export default Index;

// Styles
const MainProduct = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  padding: ${theme.space.productSection}rem 0;
  ${theme.mq()[1]} {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  ${theme.mq()[2]} {
    grid-template-columns: 1fr 1fr;
    gap: 15rem;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const DescText = styled.p`
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 3rem;
`;

// NEXT JS FUNCTIONS
// This function gets called at build time
export async function getStaticProps(context) {
  // Call an external API endpoint to get products
  const res = await fetch(`${BASE_URL}/products/${context.params.id}`);
  const product = await res.json();

  // By returning { props: { product } }, the index component
  // will receive `product` as a prop at build time
  return {
    props: {
      product,
    },
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${BASE_URL}/products`);
  const products = await res.json();

  // Get the paths we want to pre-render based on products
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
