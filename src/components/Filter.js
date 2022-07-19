import React from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import CheckBox from "./ui/CheckBox";

export default function Filter({
  graphiteChecked,
  setGraphiteChecked,
  coloredChecked,
  setColoredChecked,
}) {
  return (
    <Box>
      <div>
        <Title>Product Type</Title>
        <CheckBox checked={graphiteChecked} setChecked={setGraphiteChecked} />
        <CheckBox checked={coloredChecked} setChecked={setColoredChecked} />
      </div>
      <div>
        <Title>Price</Title>
        <PriceInputs>
          <NumInput type="number" name="min-price" defaultValue={0} />
          <Line></Line>
          <NumInput type="number" name="max-price" defaultValue={60} />
        </PriceInputs>
      </div>
    </Box>
  );
}

// Styles
const Box = styled.div`
  display: none;
  ${theme.mq()[1]} {
    display: flex;
    flex-direction: column;
    gap: 4rem;
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
  width: 100px;
  padding: 0.4rem 0 0.4rem 1rem;
  border: solid ${theme.colors.neutral} 2px;
  border-radius: 3px;
  text-align: center;
`;

const Line = styled.div`
  width: 15px;
  height: 2px;
  background: ${theme.colors.neutral};
  margin: 0 1rem;
`;
