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
  padding: 1.3rem 2rem;
  border: 0;
  transition: ${theme.transition.primary};
  cursor: pointer;
  &:hover {
    background: ${theme.colors.btnHover};
  }
`;
