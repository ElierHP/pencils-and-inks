import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function ErrorMessage({ children, color = theme.colors.error }) {
  // Styles
  const Message = styled.p`
    color: ${color};
    text-align: center;
  `;
  return <Message>{children}</Message>;
}
