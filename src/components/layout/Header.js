import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";
import Container from "../ui/Container";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Searchbar from "../Searchbar";
import ShoppingCart from "../ShoppingCart";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkHover = () => {
    console.log("Hovering Link");
  };

  return (
    <header>
      <Container>
        <Wrapper>
          <MenuIcon onClick={() => setIsOpen(!isOpen)}>
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
        <Navbar isOpen={isOpen}>
          {/* Close Mobile Navbar */}
          <CloseIcon>
            <IoClose size={35} onClick={() => setIsOpen(!isOpen)} />
          </CloseIcon>
          {/* Navbar Links*/}
          <NavUl>
            <li>
              <Link href="/">Home</Link>
            </li>
            <NavLi onMouseEnter={handleLinkHover}>
              <Link href="/pencils">Pencils</Link>
              <IoIosArrowDown size={17} />
              <PencilNav>
                <li>
                  <Link href="/pencils/graphite-pencils">Graphite Pencils</Link>
                </li>
                <li>
                  <Link href="/pencils/color-pencils">Color Pencils</Link>
                </li>
                <li>
                  <Link href="/pencils/mechanical-pencils">
                    Mechanical Pencils
                  </Link>
                </li>
              </PencilNav>
            </NavLi>
            <li>
              <Link href="/papers">Papers</Link>
            </li>
            <li>
              <Link href="/inks">Inks</Link>
            </li>
            <li>
              <Link href="/profile">My Account</Link>
            </li>
          </NavUl>
        </Navbar>
      </Container>
    </header>
  );
}

// Styles
const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 7fr 1fr;
  padding: 1rem 0;
  padding-bottom: 3rem;
  grid-gap: 2rem;
  ${theme.mq()[1]} {
    grid-gap: 5rem;
    padding: 2rem;
  }
`;

// Hamburger Menu
const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  ${theme.mq()[1]} {
    display: none;
  }
`;

const Logo = styled.a`
  font-size: ${theme.fontSizes.large}rem;
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  order: 1;
`;

// Navbar
const CloseIcon = styled.div`
  text-align: right;
  display: block;
  ${theme.mq()[1]} {
    display: none;
  }
`;

const Navbar = styled.nav`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: ${theme.colors.light};
  padding: 3rem;
  ${theme.mq()[1]} {
    display: block;
    position: relative;
    height: initial;
    padding: 0;
  }
`;

const NavUl = styled.ul`
  display: flex;
  align-items: left;
  flex-direction: column;
  font-weight: ${theme.fontWeights.bold};
  gap: 3rem;
  ${theme.mq()[1]} {
    justify-content: space-between;
    align-items: center;
    padding: 0 10rem;
    flex-direction: row;
    position: relative;
    gap: 0;
  }
`;

const NavLi = styled.li`
  display: flex;
  align-items: center;
  position: relative;
`;

const PencilNav = styled.ul`
  display: none;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 4rem;
  width: 200px;
  padding: 1rem;
`;
