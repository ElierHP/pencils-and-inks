import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";

export default function Button({ children, href, isLink }) {
  return (
    <>
      {isLink ? (
        <Btn>
          <Link href={href}>
            <A>{children}</A>
          </Link>
        </Btn>
      ) : (
        <Btn>
          <Text>{children}</Text>
        </Btn>
      )}
    </>
  );
}

// Styles
const Btn = styled.div`
  display: inline-block;
  background: ${theme.colors.primary};
  color: ${theme.colors.light};
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: ${theme.transition.primary};
  &:hover {
    background: ${theme.colors.btnHover};
  }
`;

const A = styled.a`
  color: inherit;
`;

const Text = styled.p`
  color: inherit;
`;
