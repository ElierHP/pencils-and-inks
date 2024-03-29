import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";

export default function Button({
  children,
  href,
  isLink,
  onClick,
  color = theme.colors.primary,
}) {
  // Styles
  const Btn = styled.button`
    background: ${color};
    color: ${theme.colors.light};
    padding: 0.8rem 1.5rem;
    height: 100%;
    width: inherit;
  `;

  const A = styled.a`
    color: inherit;
    &:hover {
      color: ${theme.colors.light};
    }
  `;

  return (
    <>
      {isLink ? (
        <Link href={href}>
          <Btn>
            <A>{children}</A>
          </Btn>
        </Link>
      ) : (
        <Btn onClick={onClick}>{children}</Btn>
      )}
    </>
  );
}
