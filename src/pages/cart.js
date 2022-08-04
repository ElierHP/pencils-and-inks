import React from "react";
import Layout from "../components/layout/Layout";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { PageContainer, Button, QuantityInput } from "../components/ui";
import { deleteCart } from "../utils/api/cart";
import useCart from "../hooks/useCart";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

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
                {products.map((product) => (
                  <CartItem key={product.id}>
                    {/* Link to Product Page */}
                    <Link href={`/products/${product.id}`}>
                      <A>
                        <ImageContainer>
                          <Image
                            alt={product.title}
                            src={product.images.split(",")[0]}
                            layout="responsive"
                            objectFit="cover"
                            height={100}
                            width={100}
                            priority={true}
                          />
                        </ImageContainer>
                        <h3>{product.title}</h3>
                      </A>
                    </Link>

                    <QuantityInput />

                    <p>${product.price * product.quantity}</p>

                    {/* Delete From Cart */}
                    <CloseIcon>
                      <IoClose
                        size={30}
                        color="inherit"
                        onClick={() => handleDelete(product.id)}
                      />
                    </CloseIcon>
                  </CartItem>
                ))}
              </>
            ) : (
              <p>Your shopping cart is empty.</p>
            )}
          </MainCart>
          <Checkout>
            <SubTotal>
              Subtotal: <span>$59.99</span>
            </SubTotal>
            <p>Taxes and shipping calculated at checkout.</p>
            <BtnContainer>
              <Button>Checkout</Button>
            </BtnContainer>
            <Link href={"/"}>
              <ContinueText>Continue Shopping</ContinueText>
            </Link>
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
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const A = styled.a`
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

const CloseIcon = styled.div`
  transition: ${theme.transition.primary};
  color: ${theme.colors.neutralDark};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.btnHover};
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
  /* justify-content: center;
  align-items: center; */
  gap: 2rem;
  padding: 3rem 5rem;
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
`;
