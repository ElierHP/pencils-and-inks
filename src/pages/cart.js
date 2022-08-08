import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { PageContainer, Button, ErrorMessage } from "../components/ui";
import useCart from "../hooks/useCart";
import Link from "next/link";
import CartSection from "../components/sections/CartSection";

export default function Cart() {
  const [isCheckout, setIsCheckout] = useState(false);

  const [products, isLoading, isError, subTotal, handleDelete, handleCheckout] =
    useCart();

  return (
    <Layout>
      <PageContainer>
        {!isCheckout ? (
          <>
            {" "}
            <h1>Your Cart</h1>
            <Section>
              {!isError ? (
                <CartSection
                  products={products}
                  isLoading={isLoading}
                  handleDelete={handleDelete}
                />
              ) : (
                <ErrorMessage>
                  There was a server error. Please try again later.
                </ErrorMessage>
              )}

              <Checkout>
                <SubTotal>
                  Subtotal: <span>${subTotal()}</span>
                </SubTotal>
                <p>Taxes and shipping calculated at checkout.</p>
                <BtnContainer
                  onClick={() => handleCheckout(isCheckout, setIsCheckout)}
                >
                  <Button>Checkout</Button>
                </BtnContainer>
                <Link href={"/"}>
                  <ContinueText>Continue Shopping</ContinueText>
                </Link>
              </Checkout>
            </Section>
          </>
        ) : (
          <FinalPurchase>
            <h2>Your order is being processed.</h2>
            <p>
              Thank you for the order! We will contact you via email shortly
              with payment instructions. Have a nice day!
            </p>
            <HomeBtn>
              <Button href={"/"} isLink={true}>
                Home
              </Button>
            </HomeBtn>
          </FinalPurchase>
        )}
      </PageContainer>
    </Layout>
  );
}

// Styles
const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  ${theme.mq()[2]} {
    grid-template-columns: 2fr 1fr;
  }
`;

const BtnContainer = styled.div`
  width: 100%;
`;

const Checkout = styled.div`
  border: solid ${theme.colors.neutralLight} 3px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem;
  max-height: 292px;
  ${theme.mq()[0]} {
    padding: 3rem 5rem;
  }
`;

const SubTotal = styled.h2`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const ContinueText = styled.a`
  cursor: pointer;
  color: ${theme.colors.neutralDark};
  font-size: ${theme.fontSizes.small}rem;
  text-align: center;
`;

// Purchase popup
const FinalPurchase = styled.section`
  gap: 2rem;
  max-width: 700px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background: ${theme.colors.neutralLight};
  border-radius: 3px;
  padding: 4rem;
  ${theme.mq()[1]} {
    padding: 8rem;
  }
`;

const HomeBtn = styled.div`
  width: 100%;
  margin: auto;
  ${theme.mq()[0]} {
    width: 60%;
  }
`;
