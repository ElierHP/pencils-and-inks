import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { CheckBox, Button, FormButton } from "./ui";
import { IoClose } from "react-icons/io5";

export default function Filter({
  checkboxes,
  setQuery,
  category,
  queryTag = "",
  showFilters,
  setShowFilters,
}) {
  // Price input values
  const [minNum, setMinNum] = useState(0);
  const [maxNum, setMaxNum] = useState(100);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hide the filters display
    setShowFilters(false);

    let tags = "";

    checkboxes.forEach((item) => {
      if (item.checked) tags += item.tag + ",";
    });

    // If category is "all", search by tags only.
    if (category === "all") {
      tags === ""
        ? setQuery(`/products?tags=${queryTag}`)
        : setQuery(`/products?tags=${tags.slice(0, -1)}`);
    } else {
      // Else if there's a category, search by category.
      tags === ""
        ? setQuery(`/products?category=${category}`)
        : setQuery(`/products?category=${category}&tags=${tags.slice(0, -1)}`);
    }
  };

  // Reset all the checkboxes.
  const resetFilters = () =>
    checkboxes.forEach((item) => item.setChecked(false));

  return (
    <Form showFilters={showFilters} onSubmit={(e) => handleSubmit(e)}>
      {/* Close icon for mobile view */}
      <CloseIcon>
        <IoClose
          size={30}
          color="inherit"
          onClick={() => setShowFilters(false)}
        />
      </CloseIcon>
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
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: ${theme.colors.light};
  height: 100%;
  padding: 0 1.5rem;
  justify-content: center;
  width: 70%;

  /* Animations */
  transform: ${(props) =>
    props.showFilters ? "translateX(0)" : "translateX(-400px)"};
  transition: ${theme.transition.secondary};

  ${theme.mq()[0]} {
    transform: ${(props) =>
      props.showFilters ? "translateX(0)" : "translateX(-600px)"};
  }

  ${theme.mq()[1]} {
    z-index: 1;
    position: relative;
    width: initial;
    padding: 0;
    justify-content: initial;
    width: initial;
    transform: translateX(0);
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
  flex-direction: column;
  ${theme.mq()[1]} {
    flex-direction: row;
  }
`;

// Close Icon
const CloseIcon = styled.div`
  text-align: right;
  display: block;
  transition: ${theme.transition.primary};
  color: ${theme.colors.neutralDark};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.btnHover};
  }
  ${theme.mq()[1]} {
    display: none;
  }
`;
