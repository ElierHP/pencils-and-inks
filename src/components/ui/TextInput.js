import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function TextInput({ type, placeholder }) {
  return <Input type={type} placeholder={placeholder} />;
}

// Styles
const Input = styled.input`
  padding: 0 1rem;
  border: 2px solid ${theme.colors.neutral};
  width: 100%;
  border-radius: 3px;
`;
