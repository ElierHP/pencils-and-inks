import React from "react";
import { Button, CartButton, Ratings, TextInput } from "../ui";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function ProductInfo({ title, sku, price, rating, id }) {
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
        <BtnContainer>
          <Button color={theme.colors.secondary}>Add To Wishlist</Button>
        </BtnContainer>

        {/* Add to Cart Section */}
        <InputContainer>
          {/* Cart Quantity Input */}
          <CartInput>
            <CartQuantity>Quantity</CartQuantity>
            <TextInput type="number" width={"100px"} defaultValue={1} />
          </CartInput>

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

const CartInput = styled.div`
  position: relative;
`;

const CartQuantity = styled.span`
  position: absolute;
  top: -2.2rem;
  left: 0;
  font-size: ${theme.fontSizes.small}rem;
  color: ${theme.colors.neutral};
`;

const BtnContainer = styled.div`
  width: 100%;
  order: 2;
  ${theme.mq()[0]} {
    width: initial;
  }
`;
