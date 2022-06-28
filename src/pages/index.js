import Head from "next/head";
import Layout from "../components/layout/Layout";

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
      <h1>HOME PAGE</h1>
    </Layout>
  );
}
