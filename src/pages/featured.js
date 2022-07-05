import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";

export default function Featured() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      // Get request for all products
      const data = await axios
        .get("http://localhost:3000/products")
        .then((res) => res.data);

      // Filter out featured products
      const featured = data.filter((product) =>
        product.tags.includes("featured")
      );

      setProducts(featured);
    };
    getProducts();
  }, []);

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
