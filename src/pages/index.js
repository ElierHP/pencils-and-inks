import Head from "next/head";
import Category from "../components/Category";
import ImageSection from "../components/ImageSection";
import LatestProducts from "../components/LatestProducts";
import Layout from "../components/layout/Layout";
import Subscribe from "../components/Subscribe";
import Banner from "../components/ui/Banner";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Pencils and Inks</title>
        <meta
          name="Pencils and Inks."
          content="Ecommerce store for pencils and inks."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Category />
      <LatestProducts />
      <ImageSection />
      <Subscribe />
    </Layout>
  );
}
