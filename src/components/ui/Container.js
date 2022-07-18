import React from "react";
import styled from "@emotion/styled";

export default function Container({ children }) {
  return <MainContainer>{children}</MainContainer>;
}

// Styles
const MainContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 0 2rem;
`;
