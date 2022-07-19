import React from "react";
import theme from "../styles/theme";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from "react-icons/md";

export default function CheckBox({ checked, setChecked }) {
  return (
    <CheckBoxContainer>
      {checked ? (
        <CheckBox>
          <MdOutlineCheckBox
            color={theme.colors.neutralDark}
            onClick={() => setChecked(false)}
            size={25}
          />
        </CheckBox>
      ) : (
        <CheckBox>
          <MdOutlineCheckBoxOutlineBlank
            color={theme.colors.neutral}
            onClick={() => setChecked(true)}
            size={25}
          />
        </CheckBox>
      )}

      <Label htmlFor="graphite-pencils">Graphite Pencils</Label>
    </CheckBoxContainer>
  );
}

// Styles
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
