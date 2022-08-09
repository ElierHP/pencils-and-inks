import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function FilterForm({ children, handleSubmit, showFilters }) {
  return (
    <Form showFilters={showFilters} onSubmit={(e) => handleSubmit(e)}>
      {children}
    </Form>
  );
}

// Styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: ${theme.colors.light};
  height: 100%;
  padding: 0 1.5rem;
  justify-content: center;
  width: 70%;

  /* Animations */
  transform: ${(props) =>
    props.showFilters ? "translateX(0)" : "translateX(-400px)"};
  transition: ${theme.transition.secondary};

  ${theme.mq()[0]} {
    transform: ${(props) =>
      props.showFilters ? "translateX(0)" : "translateX(-600px)"};
  }

  ${theme.mq()[1]} {
    z-index: 1;
    position: relative;
    width: initial;
    padding: 0;
    justify-content: initial;
    width: initial;
    transform: translateX(0);
  }
`;
