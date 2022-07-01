import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";
import Container from "../ui/Container";
import { HiMenu } from "react-icons/hi";
import Searchbar from "../Searchbar";
import ShoppingCart from "../ShoppingCart";
import Navbar from "./Navbar";

export default function Header() {
  // State for the mobile sidebar menu. If true, sidebar displays.
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MainHeader>
      <Container>
        <Wrapper>
          {/* Mobile Menu Icon. If clicked, it displays sidebar. */}
          <MenuIcon onClick={() => setIsOpen(true)}>
            <HiMenu size={40} />
          </MenuIcon>

          {/* Logo */}
          <Link href="/">
            <Logo>{"Pencils&Inks"}</Logo>
          </Link>

          {/* Search Bar */}
          <Searchbar />

          {/* Shopping Cart */}
          <ShoppingCart />
        </Wrapper>

        {/* Navbar Menu */}
        {/* Props handle whether the mobile sidebar is open or closed. */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </MainHeader>
  );
}

// Styles
const MainHeader = styled.header`
  background: ${theme.colors.light};
  position: relative;
  z-index: 10;
`;
const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 7fr 1fr;
  padding: 1rem 0;
  padding-bottom: 3rem;
  grid-gap: 2rem;
  position: relative;
  ${theme.mq()[1]} {
    grid-gap: 5rem;
    padding: 2rem;
  }
`;

const Logo = styled.a`
  font-size: ${theme.fontSizes.large}rem;
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
`;

// Mobile Menu
const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  ${theme.mq()[2]} {
    display: none;
  }
`;
