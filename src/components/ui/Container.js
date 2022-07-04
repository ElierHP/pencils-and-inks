import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function Container({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

// Styles

const MainContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem;
  ${theme.mq()[1]} {
    padding: 0 2rem;
  }
`;
