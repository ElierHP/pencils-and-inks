import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function ImageContainer({ children }) {
  // Used to wrap all List images
  return <Container>{children}</Container>;
}

// Styles
const Container = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  ${theme.mq()[2]} {
    width: 200px;
    height: 200px;
  }
  ${theme.mq()[3]} {
    width: 250px;
    height: 250px;
  }
`;
