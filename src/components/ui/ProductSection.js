import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function ProductSection({ children }) {
  return <Section>{children}</Section>;
}

// Styles
const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: ${theme.space.productSection}rem 0;
  gap: 3rem;
  ${theme.mq()[1]} {
    grid-template-columns: 1fr 4fr;
  }
  ${theme.mq()[3]} {
    gap: 10rem;
  }
`;
