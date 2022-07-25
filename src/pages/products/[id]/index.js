import Layout from "../../../components/layout/Layout";
import ProductNav from "../../../components/ProductNav";
import { PageContainer } from "../../../components/ui";

function index({ product }) {
  const { title, description, id, category, tags, sku } = product;

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
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </PageContainer>
    </Layout>
  );
}

export default index;

// This function gets called at build time
export async function getStaticProps(context) {
  // Call an external API endpoint to get products
  const res = await fetch(
    `http://localhost:3000/products/${context.params.id}`
  );
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
  const res = await fetch("http://localhost:3000/products");
  const products = await res.json();

  // Get the paths we want to pre-render based on products
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
