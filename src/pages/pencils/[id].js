import Layout from "../../components/layout/Layout";

function index({ product }) {
  return (
    <Layout>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
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
