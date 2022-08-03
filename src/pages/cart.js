import React, { useContext, useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { PageContainer } from "../components/ui";
import { deleteCart } from "../utils/api/cart";
import { Cart } from "../context/CartProvider";
import axios from "axios";
import { BASE_URL } from "../utils/api";

export default function cart() {
  const [cart, isLoading] = useContext(Cart);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const serverRequest = async () => {
      let cartIds = "";

      if (!isLoading) {
        cart.forEach((item) => {
          if (cart.length <= 1) {
            cartIds = item.product_id;
          } else {
            cartIds += item.product_id + ",";
          }
        });
        if (typeof cartIds !== "number") cartIds = cartIds.slice(0, -1);
      }

      if (cartIds !== "") {
        const res = await axios.get(`${BASE_URL}/products/${cartIds}`);

        let index = 0;
        const productRes = res.data.map((product) => {
          index += 1;
          return { ...product, quantity: cart[index - 1].quantity };
        });

        setProducts(productRes);
      }
    };

    serverRequest();
  }, [cart]);

  const handleDelete = (id) => {
    deleteCart(id);
    window.location.reload();
  };

  return (
    <Layout>
      <PageContainer>
        <h1>Your Cart</h1>

        {/* Check that cart isn't empty. */}
        {!isLoading ? (
          <>
            {products.map((item) => (
              <p key={item.id}>
                {item.title}
                <button onClick={() => handleDelete(item.id)}>X</button>
              </p>
            ))}
          </>
        ) : (
          <p>Your shopping cart is empty.</p>
        )}
      </PageContainer>
    </Layout>
  );
}
