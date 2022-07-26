import React from "react";
import { Button, TextInput } from "../ui";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function ProductInfo({ title, sku, price }) {
  return (
    <ItemInfo>
      <div>
        <h2>{title}</h2>
        <SkuText>SKU: {sku}</SkuText>
      </div>
      <p>
        Price: <Price>${price}</Price>
      </p>
      <div>
        <Button color={theme.colors.secondary}>Add To Wishlist</Button>
      </div>
      <InputContainer>
        <CartInput>
          <CartQuantity>Quantity</CartQuantity>
          <TextInput type="number" width={"100px"} defaultValue={1} />
        </CartInput>
        <Button>Add To Cart</Button>
      </InputContainer>
    </ItemInfo>
  );
}

// Styles
const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const SkuText = styled.p`
  color: ${theme.colors.neutral};
`;

const Price = styled.span`
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.large}rem;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1.5rem;
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
