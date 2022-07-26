import { useState } from "react";
import Layout from "../../../components/layout/Layout";
import { HandleAsync, PageContainer } from "../../../components/ui";
import styled from "@emotion/styled";
import theme from "../../../styles/theme";
import { BASE_URL } from "../../../utils/api";
import { formatCategory, formatTags } from "../../../utils/formatText";
import {
  ProductImages,
  ProductRow,
  ProductNav,
  ProductInfo,
} from "../../../components/products";
import { useQuery } from "react-query";
import { getProducts } from "../../../utils/api/products";

function index({ product }) {
  const { title, id, category, tags, sku, price } = product;

  const mainImage = product.images.split(",")[0];
  const images = product.images.split(",");
  images.shift();

  const description = product.description.split("\n");

  // Queries
  const [query, setQuery] = useState(
    `/products?category=${category}&tags=${tags}`
  );
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery(["products", query], () => getProducts(query));

  return (
    <Layout>
      <PageContainer>
        {/* Top Product Navbar */}
        <ProductNav
          links={[
            { label: "Home", url: "/" },
            { label: formatCategory(category), url: `/${product.category}` },
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
          <ProductImages mainImage={mainImage} images={images} title={title} />
          <ProductInfo title={title} sku={sku} price={price} />
        </MainProduct>

        {/* Large Description */}
        <Title>Description</Title>
        {description.map((text) => (
          <DescText>{text}</DescText>
        ))}

        {/* Similar Products */}
        <Title>You May Also Like</Title>
        <HandleAsync isLoading={isLoading} isError={isError}>
          <ProductRow products={products} />
        </HandleAsync>
      </PageContainer>
    </Layout>
  );
}

export default index;

// Styles
const MainProduct = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15rem;
  padding: ${theme.space.productSection}rem 0;
`;

const Title = styled.h2`
  margin-bottom: 3rem;
`;

const DescText = styled.p`
  margin-bottom: 1rem;
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
