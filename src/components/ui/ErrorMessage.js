import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function ErrorMessage({
  children,
  color = theme.colors.error,
  align = "center",
}) {
  // Styles
  const Message = styled.p`
    color: ${color};
    text-align: ${align};
  `;
  return <Message>{children}</Message>;
}
