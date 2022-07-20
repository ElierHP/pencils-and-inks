import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function TextInput({
  type,
  placeholder,
  autoComplete,
  register,
  defaultValue,
  step,
}) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      {...register}
      autoComplete={autoComplete}
      defaultValue={defaultValue}
      step={step}
    />
  );
}

// Styles
const Input = styled.input`
  padding: 0 1rem;
  width: 100%;
  min-height: 100%;
  transition: ${theme.transition.primary};
`;
