import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { PageContainer } from "../components/ui";
import { User } from "../context/UserProvider";
import { deleteCart } from "../utils/api/cart";

export default function cart() {
  const [, , cart] = useContext(User);

  const handleDelete = (id) => {
    deleteCart(id);
    window.location.reload();
  };
  return (
    <Layout>
      <PageContainer>
        <h1>Your Cart</h1>

        {/* Check that cart isn't empty. */}
        {cart.length > 0 ? (
          <>
            {cart.map((product) => (
              <p key={product.id}>
                {product.title}
                <button onClick={() => handleDelete(product.id)}>X</button>
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
