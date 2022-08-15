import React from "react";
import { Button, CartButton, Ratings, QuantityInput } from "../ui";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import useWishlist from "../../hooks/useWishlist";

export default function ProductInfo({ title, sku, price, rating, id }) {
  const addToWishlist = useWishlist(id);

  return (
    <ItemInfo>
      <div>
        <h2>{title}</h2>
        <SkuText>SKU: {sku}</SkuText>
        <RatingContainer>
          <Ratings rating={rating} /> <ReviewCount>{rating} Stars</ReviewCount>
        </RatingContainer>
      </div>
      <p>
        Price: <Price>${price}</Price>
      </p>
      <Buttons>
        {/* Wishlist Button */}
        <BtnContainer onClick={() => addToWishlist()}>
          <Button color={theme.colors.secondary}>Add To Wishlist</Button>
        </BtnContainer>

        {/* Add to Cart Section */}
        <InputContainer>
          {/* Cart Quantity Input */}
          <QuantityInput />

          {/* Add to Cart Button */}
          <BtnContainer>
            <CartButton id={id} />
          </BtnContainer>
        </InputContainer>
      </Buttons>
    </ItemInfo>
  );
}

// Styles
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  ${theme.mq()[0]} {
    gap: 4rem;
  }
  ${theme.mq()[1]} {
    gap: 1rem;
  }
  ${theme.mq()[2]} {
    gap: 4rem;
  }
`;

const SkuText = styled.p`
  color: ${theme.colors.neutral};
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  align-items: center;
`;

const ReviewCount = styled.span`
  color: ${theme.colors.neutral};
`;

const Price = styled.span`
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.large}rem;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  ${theme.mq()[0]} {
    flex-direction: row;
    gap: 4rem;
  }
  ${theme.mq()[1]} {
    flex-direction: column;
    gap: 1.5rem;
  }
  ${theme.mq()[2]} {
    gap: 4rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1.5rem;
  ${theme.mq()[0]} {
    padding-top: 0;
    order: 1;
  }
  ${theme.mq()[1]} {
    padding-top: 1.5rem;
  }
`;

const BtnContainer = styled.div`
  width: 100%;
  order: 2;
  ${theme.mq()[0]} {
    width: initial;
  }
`;
