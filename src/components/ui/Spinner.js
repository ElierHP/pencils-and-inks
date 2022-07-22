import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { keyframes } from "@emotion/react";

export default function Spinner({ height = 150 }) {
  // Spinner
  const spinAnim = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
  `;

  const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${height}px;
  `;

  const SpinnerIcon = styled.div`
    width: 50px;
    height: 50px;
    border: 10px solid ${theme.colors.neutralLight};
    border-top: 10px solid ${theme.colors.btnHover};
    border-radius: 50%;
    animation: ${spinAnim} 1.5s linear infinite;
  `;

  return (
    <SpinnerContainer>
      <SpinnerIcon></SpinnerIcon>
    </SpinnerContainer>
  );
}
