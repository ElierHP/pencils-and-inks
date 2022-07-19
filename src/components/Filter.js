import React from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";

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
        <CheckBoxContainer>
          {graphiteChecked ? (
            <CheckBox>
              <MdOutlineCheckBox
                color={theme.colors.neutralDark}
                onClick={() => setGraphiteChecked(!graphiteChecked)}
                size={25}
              />
            </CheckBox>
          ) : (
            <CheckBox>
              <MdOutlineCheckBoxOutlineBlank
                color={theme.colors.neutral}
                onClick={() => setGraphiteChecked(!graphiteChecked)}
                size={25}
              />
            </CheckBox>
          )}

          <Label htmlFor="graphite-pencils">Graphite Pencils</Label>
        </CheckBoxContainer>
        <CheckBoxContainer>
          {coloredChecked ? (
            <CheckBox>
              <MdOutlineCheckBox
                color={theme.colors.neutralDark}
                onClick={() => setColoredChecked(!coloredChecked)}
                size={25}
              />
            </CheckBox>
          ) : (
            <CheckBox>
              <MdOutlineCheckBoxOutlineBlank
                color={theme.colors.neutral}
                onClick={() => setColoredChecked(!coloredChecked)}
                size={25}
              />
            </CheckBox>
          )}
          <Label htmlFor="colored-pencils">Colored Pencils</Label>
        </CheckBoxContainer>
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

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CheckBox = styled.div`
  cursor: pointer;
`;

const Label = styled.label`
  margin-bottom: 0.4rem;
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
