import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";

export default function Button({ children, href }) {
  return (
    <Btn>
      <Link href={href}>
        <A>{children}</A>
      </Link>
    </Btn>
  );
}

// Styles
const Btn = styled.div`
  background: ${theme.colors.primary};
  color: ${theme.colors.light};
  padding: 1rem 2rem;
  border-radius: 2px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  &:hover {
    background: ${theme.colors.dark};
  }
`;

const A = styled.a`
  color: inherit;
`;
