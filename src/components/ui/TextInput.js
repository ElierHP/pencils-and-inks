import React from "react";
import styled from "@emotion/styled";

export default function TextInput({
  type,
  placeholder,
  autoComplete,
  register,
  defaultValue,
  step,
  width = "100%",
}) {
  // Styles
  const Input = styled.input`
    padding: 0 1rem;
    width: ${width};
    min-height: 100%;
  `;
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
