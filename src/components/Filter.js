import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { CheckBox, Button, FormButton } from "./ui";

export default function Filter({
  checkboxes,
  setQuery,
  category,
  queryTag = "",
}) {
  // Price input values
  const [minNum, setMinNum] = useState(0);
  const [maxNum, setMaxNum] = useState(100);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tags = "";
    checkboxes.forEach((item) => {
      if (item.checked) tags += item.tag + ",";
    });
    tags === ""
      ? setQuery(`/products?category=${category}${queryTag}`)
      : setQuery(`/products?category=${category}&tags=${tags.slice(0, -1)}`);
  };

  const resetFilters = () => {
    checkboxes.forEach((item) => item.setChecked(false));
  };
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      {/* Product type checkbox filters. */}
      <div>
        <Title>Product Type</Title>
        {checkboxes.map((item) => (
          <CheckBox
            key={item.label}
            checked={item.checked}
            setChecked={item.setChecked}
            label={item.label}
          />
        ))}
      </div>

      {/* Price filters */}
      <div>
        <Title>Price</Title>
        <PriceInputs>
          <NumInput
            type="number"
            name="min-price"
            value={minNum}
            onChange={(e) => setMinNum(e.target.value)}
          />
          <Line></Line>
          <NumInput
            type="number"
            name="max-price"
            value={maxNum}
            onChange={(e) => setMaxNum(e.target.value)}
          />
        </PriceInputs>
      </div>

      <BtnContainer>
        <FormButton
          color={theme.colors.secondary}
          text="Apply Filters"
          padding="0.8rem 2rem"
        />

        <Button
          isLink={false}
          color={theme.colors.neutral}
          onClick={() => resetFilters()}
        >
          Reset
        </Button>
      </BtnContainer>
    </Form>
  );
}

// Styles
const Form = styled.form`
  display: none;
  ${theme.mq()[1]} {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const Title = styled.h3`
  margin-bottom: 2rem;
`;

const PriceInputs = styled.div`
  display: flex;
  align-items: center;
`;

const NumInput = styled.input`
  width: 100%;
  padding: 0.4rem 0 0.4rem 1rem;
  border: solid ${theme.colors.neutral} 2px;
  border-radius: 3px;
  text-align: center;
`;

const Line = styled.div`
  width: 20px;
  height: 2px;
  background: ${theme.colors.neutral};
  margin: 0 1rem;
`;

const BtnContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;
