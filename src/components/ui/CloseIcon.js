import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { IoClose } from "react-icons/io5";

export default function CloseIcon({ handleClick }) {
  return (
    <Close>
      <IoClose size={30} color="inherit" onClick={() => handleClick(false)} />
    </Close>
  );
}

// Styles
// Close Icon
const Close = styled.div`
  text-align: right;
  display: block;
  transition: ${theme.transition.primary};
  color: ${theme.colors.neutralDark};
  cursor: pointer;
  &:hover {
    color: ${theme.colors.btnHover};
  }
  ${theme.mq()[1]} {
    display: none;
  }
`;
