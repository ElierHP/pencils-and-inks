import Head from "next/head";
import Category from "../components/Category";
import ImageSection from "../components/ImageSection";
import Layout from "../components/layout/Layout";
import NewItems from "../components/NewItems";
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
      <NewItems />
      <ImageSection />
    </Layout>
  );
}
