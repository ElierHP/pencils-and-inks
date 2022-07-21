import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function FormButton({
  text,
  padding = "1.3rem 2rem",
  color = theme.colors.primary,
}) {
  // Styles
  const Button = styled.input`
    background: ${color};
    color: ${theme.colors.light};
    padding: ${padding};
    border: 0;
    transition: ${theme.transition.primary};
    cursor: pointer;
    &:hover {
      background: ${theme.colors.btnHover};
    }
  `;

  return <Button type="submit" value={text} />;
}
