import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";
import Container from "../ui/Container";
import { GrCart } from "react-icons/gr";
import { HiMenu } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import Searchbar from "../Searchbar";

export default function Header() {
  const handleLinkHover = () => {
    console.log("Hovering Link");
  };

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
            <CartTitle>Cart</CartTitle>
          </Cart>
        </Wrapper>
        <Navbar>
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
const HamburgerIcon = styled.div`
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

// Shopping Cart
const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: ${theme.fontWeights.bold};
  cursor: pointer;
  order: 2;
  margin-left: auto;
  ${theme.mq()[1]} {
    order: 3;
  }
`;

const CartTitle = styled.span`
  display: none;
  ${theme.mq()[1]} {
    display: block;
  }
`;

// Navbar
const Navbar = styled.nav``;

const NavUl = styled.ul`
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  font-weight: ${theme.fontWeights.bold};
  ${theme.mq()[1]} {
    display: flex;
    padding: 0 10rem;
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