import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function FormButton({ text }) {
  return <Button type="submit" value={text} />;
}

// Styles
const Button = styled.input`
  background: ${theme.colors.primary};
  color: ${theme.colors.light};
  padding: 1.5rem;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  &:hover {
    background: ${theme.colors.btnHover};
  }
`;
