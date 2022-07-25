import Layout from "../../../components/layout/Layout";
import ProductNav from "../../../components/ProductNav";
import { Button, PageContainer, TextInput } from "../../../components/ui";
import styled from "@emotion/styled";
import theme from "../../../styles/theme";
import Image from "next/image";
import { BASE_URL } from "../../../utils/api";

function index({ product }) {
  const { title, id, category, tags, sku, price } = product;

  const mainImage = product.images.split(",")[0];
  const images = product.images.split(",");
  images.shift();

  const description = product.description.split("\n");

  const formatLabel = (tag) => {
    const formattedTag = tag
      .split("-")
      .map((string) => string.charAt(0).toUpperCase() + string.slice(1));

    return formattedTag.join(" ");
  };

  const formatCategory = (category) =>
    `${category.charAt(0).toUpperCase() + category.slice(1)}`;
  return (
    <Layout>
      <PageContainer>
        <ProductNav
          links={[
            { label: "Home", url: "/" },
            { label: formatCategory(category), url: `/${product.category}` },
            {
              label: formatLabel(tags.split(",")[0]),
              url: `/${category}/${tags.split(",")[0]}s`,
            },
            {
              label: sku,
              url: `/products/${id}`,
            },
          ]}
        />
        <MainProduct>
          <ImageContainer>
            <Images>
              {images.map((image) => (
                <Image
                  alt={image}
                  src={image}
                  layout="responsive"
                  width={100}
                  height={100}
                  objectFit="cover"
                  quality={100}
                />
              ))}
            </Images>
            <Image
              alt={`${title}-image`}
              src={mainImage}
              layout="responsive"
              width={100}
              height={100}
              objectFit="cover"
              quality={100}
            />
          </ImageContainer>
          <ItemInfo>
            <div>
              <h2>{title}</h2>
              <SkuText>SKU: {sku}</SkuText>
            </div>
            <p>
              Price: <Price>${price}</Price>
            </p>
            <div>
              <Button color={theme.colors.secondary}>Add To Wishlist</Button>
            </div>
            <InputContainer>
              <CartInput>
                <CartQuantity>Quantity</CartQuantity>
                <TextInput type="number" width={"100px"} defaultValue={1} />
              </CartInput>
              <Button>Add To Cart</Button>
            </InputContainer>
          </ItemInfo>
        </MainProduct>
        <DescTitle>Description</DescTitle>
        {description.map((text) => (
          <DescText>{text}</DescText>
        ))}
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
const ImageContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
`;

const Images = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1rem;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const SkuText = styled.p`
  color: ${theme.colors.neutral};
`;

const Price = styled.span`
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.large}rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1.5rem;
`;

const CartInput = styled.div`
  position: relative;
`;

const CartQuantity = styled.span`
  position: absolute;
  top: -2.2rem;
  left: 0;
  font-size: ${theme.fontSizes.small}rem;
  color: ${theme.colors.neutral};
`;

const DescTitle = styled.h2`
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
