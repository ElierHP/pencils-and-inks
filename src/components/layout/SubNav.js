import React, { useContext } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";
import { User } from "../../context/UserProvider";

export default function SubNav({ showNav, data }) {
  const [user] = useContext(User);

  return (
    <Nav showNav={showNav}>
      {data.map((item) => (
        <li key={item.key}>
          {item.name !== "Login" ? (
            <Link href={item.url}>
              <a>{item.name}</a>
            </Link>
          ) : (
            // Check if user is logged in.
            <>
              {user === null ? (
                // Display a Login Link if logged in.
                <Link href={item.url}>
                  <a>{item.name}</a>
                </Link>
              ) : (
                // Display Logout if not logged in.
                "Logout"
              )}
            </>
          )}
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
