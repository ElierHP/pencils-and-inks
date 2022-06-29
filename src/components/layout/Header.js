import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";
import Container from "../ui/Container";
import { GrCart } from "react-icons/gr";
import { HiMenu } from "react-icons/hi";
import Searchbar from "../Searchbar";

export default function Header() {
  return (
    <header>
      <Container>
        <Wrapper>
          <HamburgerIcon>
            <HiMenu size={40} />
          </HamburgerIcon>

          {/* Logo */}
          <Link href="/">
            <Logo>{"Pencils&Inks"}</Logo>
          </Link>

          {/* Search Bar */}
          <Searchbar />

          {/* Shopping Cart */}
          <Cart>
            <GrCart size={35} />
            Cart
          </Cart>
        </Wrapper>
        <nav>
          <ul>
            <li>Home</li>
            <li>
              Pencils
              <ul>
                <li>Graphite Pencils</li>
                <li>Color Pencils</li>
                <li>Mechanical Pencils</li>
              </ul>
            </li>
            <li>Papers</li>
            <li>Inks</li>
            <li>My Account</li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

// Styles
const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 7fr 1fr;
  padding-top: 2rem;
  grid-gap: 5rem;
`;

// Hamburger Menu
const HamburgerIcon = styled.div`
  display: block;
  ${theme.mq()[1]} {
    display: none;
  }
`;

const Logo = styled.a`
  font-size: ${theme.fontSizes.large}rem;
  font-weight: ${theme.fontWeights.bold};
`;

// Shopping Cart
const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: ${theme.fontWeights.bold};
`;
