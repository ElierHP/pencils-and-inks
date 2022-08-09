import React from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { CheckBox, Button, FormButton, FilterForm, CloseIcon } from "./ui";
import useFilter from "../hooks/useFilter";

export default function Filter({
  checkboxes,
  setQuery,
  category,
  queryTag = "",
  showFilters,
  setShowFilters,
}) {
  // useFilter custom hook
  const [minNum, setMinNum, maxNum, setMaxNum, handleSubmit, resetFilters] =
    useFilter(checkboxes, setQuery, category, queryTag, setShowFilters);

  return (
    <FilterForm showFilters={showFilters} handleSubmit={handleSubmit}>
      {/* Close icon for mobile view */}
      <CloseIcon handleClick={setShowFilters} />
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
    </FilterForm>
  );
}
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
  flex-direction: column;
  ${theme.mq()[1]} {
    flex-direction: row;
  }
`;
