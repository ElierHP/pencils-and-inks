import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";

export default function SubNav({ showNav, data }) {
  return (
    <Nav showNav={showNav}>
      {data.map((item) => (
        <li key={item.key}>
          <Link href={item.url}>{item.name}</Link>
        </li>
      ))}
    </Nav>
  );
}

// Navbar with all the sub-links
const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: ${theme.colors.neutralLight};
  border-radius: 5px;
  margin-top: 0.5rem;
  font-weight: ${theme.fontWeights.body};

  /* Animations */
  position: ${(props) => (props.showNav ? "relative" : "absolute")};
  visibility: ${(props) => (props.showNav ? "visible" : "hidden")};
  transform: ${(props) =>
    props.showNav ? "translateY(0)" : "translateY(-20px)"};

  transition: all 0.1s ease-in-out;

  ${theme.mq()[2]} {
    position: absolute;
    top: 3rem;
    width: 200px;
    padding: 2rem 1rem;
    margin-top: 0;
    background: ${theme.colors.light};

    /* Animations */
    transform: ${(props) =>
      props.showNav ? "translateY(0)" : "translateY(-30px)"};
    visibility: ${(props) => (props.showNav ? "visible" : "hidden")};
    transition: ${theme.transition.primary};
  }
`;
