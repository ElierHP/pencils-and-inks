import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function ListItem({ children }) {
  // Li for each product item.
  return <Li>{children}</Li>;
}

// Styles
const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 130px;
  ${theme.mq()[0]} {
    width: 150px;
  }
  ${theme.mq()[2]} {
    width: 250px;
  }
`;
