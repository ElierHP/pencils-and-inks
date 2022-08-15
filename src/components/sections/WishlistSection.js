import React from "react";
import theme from "../../styles/theme";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { HandleAsync } from "../ui";
import styled from "@emotion/styled";
import { deleteWishlist, deleteWishlistItem } from "../../utils/api/wishlist";

export default function WishlistSection({
  getProducts,
  isLoading,
  isError,
  refetch,
}) {
  const handleDelete = async (id) => {
    // If wishlist only has 1 product left, delete the wishlist.
    getProducts().length === 1
      ? await deleteWishlist()
      : await deleteWishlistItem(id);

    refetch();
  };
  return (
    <HandleAsync isLoading={isLoading} isError={isError}>
      <Wishlist>
        {getProducts().map((product) => (
          <WishlistItem key={product.id}>
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
            <p>${product.price}</p>
            {/* Delete From Cart */}
            <CloseIcon>
              <IoClose
                size={30}
                color="inherit"
                onClick={() => handleDelete(product.id)}
              />
            </CloseIcon>
          </WishlistItem>
        ))}
      </Wishlist>
    </HandleAsync>
  );
}

// Styles
const Wishlist = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

const WishlistItem = styled.div`
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
  ${theme.mq()[0]} {
    display: block;
  }
`;

const CloseIcon = styled.div`
  transition: ${theme.transition.primary};
  color: ${theme.colors.neutralDark};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.btnHover};
  }
`;
