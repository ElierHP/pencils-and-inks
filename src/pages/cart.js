import React from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { PageContainer, Button } from "../components/ui";
import { deleteCart } from "../utils/api/cart";
import useCart from "../hooks/useCart";

export default function cart() {
  const [products, isLoading] = useCart();

  const handleDelete = (id) => {
    deleteCart(id);
    window.location.reload();
  };

  return (
    <Layout>
      <PageContainer>
        <h1>Your Cart</h1>
        <Section>
          <MainCart>
            {/* Check that cart isn't empty. */}
            {!isLoading ? (
              <>
                {products.map((item) => (
                  <CartItem>
                    <p key={item.id}>
                      {item.title}
                      <button onClick={() => handleDelete(item.id)}>X</button>
                    </p>
                  </CartItem>
                ))}
              </>
            ) : (
              <p>Your shopping cart is empty.</p>
            )}
          </MainCart>
          <Checkout>
            <h2>
              Subtotal: <span>59.99</span>
            </h2>
            <p>Taxes and shipping calculated at checkout</p>
            <div>
              <Button>Checkout</Button>
            </div>
            <p>Continue Shopping</p>
          </Checkout>
        </Section>
      </PageContainer>
    </Layout>
  );
}

// Styles
const Section = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
`;

const MainCart = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

const CartItem = styled.div`
  border: solid ${theme.colors.neutralLight} 3px;
  border-radius: 3px;
  padding: 5rem 3rem;
`;

const Checkout = styled.div`
  border: solid ${theme.colors.neutralLight} 3px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
