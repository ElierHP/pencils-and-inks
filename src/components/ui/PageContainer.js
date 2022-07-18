import React from "react";
import Container from "./Container";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function PageContainer({ children }) {
  return (
    <>
      <Line></Line>
      <Container>{children}</Container>
    </>
  );
}

// Styles
const Line = styled.div`
  border-bottom: 2px solid ${theme.colors.neutralLight};
  margin-bottom: 3rem;
  opacity: 0.6;
`;
