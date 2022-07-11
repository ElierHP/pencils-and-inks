import React from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from "../utils/api";

export default function Featured() {
  const getProducts = async () => {
    // Get request for all products
    const data = await axios
      .get(`${BASE_URL}/products`)
      .then((res) => res.data);

    // Filter out featured products
    const featured = data.filter((product) =>
      product.tags.includes("featured")
    );
    return featured;
  };

  // Queries, initial data is an empty array.
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery("products", getProducts, { initialData: [] });

  return (
    <Layout>
      <h1>Featured Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </Layout>
  );
}
