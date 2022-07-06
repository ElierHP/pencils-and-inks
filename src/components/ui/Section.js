import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function Section({ children }) {
  return <Box>{children}</Box>;
}

// Styles
const Box = styled.section`
  padding: ${theme.space.section}rem 0;
`;
