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
        <Btn>{children}</Btn>
      )}
    </>
  );
}

// Styles
const Btn = styled.button`
  background: ${theme.colors.primary};
  color: ${theme.colors.light};
  padding: 0.8rem 1.5rem;
`;

const A = styled.a`
  color: inherit;
  &:hover {
    color: ${theme.colors.light};
  }
`;
