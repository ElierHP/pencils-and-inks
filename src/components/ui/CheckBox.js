import React from "react";
import theme from "../../styles/theme";
import styled from "@emotion/styled";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";

export default function CheckBox({ checked, setChecked, label }) {
  return (
    <CheckBoxContainer>
      {checked ? (
        <Icon>
          <MdOutlineCheckBox
            color={theme.colors.neutralDark}
            onClick={() => setChecked(false)}
            size={25}
          />
        </Icon>
      ) : (
        <Icon>
          <MdOutlineCheckBoxOutlineBlank
            color={theme.colors.neutral}
            onClick={() => setChecked(true)}
            size={25}
          />
        </Icon>
      )}

      <Label htmlFor="graphite-pencils">{label}</Label>
    </CheckBoxContainer>
  );
}

// Styles
const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Icon = styled.div`
  cursor: pointer;
`;

const Label = styled.label`
  margin-bottom: 0.4rem;
`;
