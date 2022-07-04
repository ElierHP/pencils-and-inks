import Head from "next/head";
import Category from "../components/Category";
import Layout from "../components/layout/Layout";
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
    </Layout>
  );
}
