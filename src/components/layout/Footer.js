import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Container, Logo } from "../ui";
import theme from "../../styles/theme";

export default function Footer() {
  return (
    <MainFooter>
      <Container>
        <Wrapper>
          {/* Logo */}
          <Logo href="/" size={2} />
          <Line />

          {/* Information */}
          <Info>
            <h3>Business Info</h3>
            <List>
              <li>
                <a href={"mailto:info@pencils&inks.com"}>
                  {"info@pencils&inks.com"}
                </a>
              </li>
              <li>1800-544-2364</li>
              <li>Open 24/7</li>
              <li>
                <Link href="/about">
                  <a>About Us</a>
                </Link>
              </li>
            </List>
          </Info>

          {/* Links */}
          <div>
            <h3>Quick Links</h3>
            <List>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/pencils">
                  <a>Pencils</a>
                </Link>
              </li>
              <li>
                <Link href="/papers">
                  <a>Papers</a>
                </Link>
              </li>
              <li>
                <Link href="/inks">
                  <a>Inks</a>
                </Link>
              </li>
            </List>
          </div>
        </Wrapper>
      </Container>
    </MainFooter>
  );
}

// Styles
const MainFooter = styled.footer`
  padding: 1rem;
  padding-top: 8rem;
  ${theme.mq()[0]} {
    padding: ${theme.space.section}rem;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;
  gap: 4rem;
  ${theme.mq()[1]} {
    grid-template-columns: 1fr 3fr 1fr;
    text-align: left;
    gap: 1rem;
  }
`;

const Line = styled.div`
  display: block;
  width: 100%;
  height: 3px;
  background: ${theme.colors.neutral};
  ${theme.mq()[1]} {
    display: none;
  }
`;
const Info = styled.div`
  padding-left: 0;
  ${theme.mq()[2]} {
    padding-left: 8rem;
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;
  column-gap: 5rem;
  ${theme.mq()[2]} {
    grid-template-columns: 1fr 1fr;
  }
`;
