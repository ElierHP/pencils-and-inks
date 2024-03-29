import React, { useState } from "react";
import { QuantityInput } from "../ui";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";

export default function CartSection({ products, isLoading, handleDelete }) {
  const [, setQuantity] = useState(1);

  return (
    <MainCart>
      {/* Check that cart isn't empty. */}
      {!isLoading && products.length > 0 ? (
        <>
          {/* Map over products in cart and render them. */}
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
                  <ProductTitle>{product.title}</ProductTitle>
                </A>
              </Link>

              <QuantityInput
                id={product.id}
                quantity={product.quantity}
                setQuantity={setQuantity}
                type="cart"
              />

              {/* Subtotal Calculation */}
              <Subtotal>
                $
                {(
                  Math.round(product.price * product.quantity * 100) / 100
                ).toFixed(2)}
              </Subtotal>

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
  );
}

// Styles
const MainCart = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

const CartItem = styled.div`
  border: solid ${theme.colors.neutralLight} 3px;
  border-radius: 3px;
  padding: 2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  ${theme.mq()[0]} {
    padding: 1.5rem;
  }
`;

const A = styled.a`
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  /* Galaxy Fold Breakpoint */
  @media only screen and (max-width: 350px) {
    width: 50px;
    height: 50px;
  }
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

const ProductTitle = styled.h3`
  display: none;
  ${theme.mq()[1]} {
    display: block;
  }
`;

const Subtotal = styled.span`
  width: 60px;
`;

const CloseIcon = styled.div`
  transition: ${theme.transition.primary};
  color: ${theme.colors.neutralDark};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.btnHover};
  }
`;
