import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function List({ children }) {
  return <Ul>{children}</Ul>;
}

// Styles

const Ul = styled.ul`
  @media only screen and (max-width: 300px) {
    grid-template-columns: 1fr;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  cursor: pointer;
  gap: 3rem;
  justify-items: center;
  ${theme.mq()[0]} {
    justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }
  ${theme.mq()[1]} {
    justify-content: space-between;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
`;
