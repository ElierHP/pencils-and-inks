import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";

export default function Logo({ href, size }) {
  // Styles
  const Text = styled.a`
    font-weight: ${theme.fontWeights.bold};
    font-size: ${size}rem;
    cursor: pointer;
    ${theme.mq()[1]} {
      /* 20% larger font size */
      font-size: ${size * 0.2 + size}rem;
    }
  `;

  return (
    <Link href={href}>
      <Text>{"Pencils&Inks"}</Text>
    </Link>
  );
}