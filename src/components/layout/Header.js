import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";
import Container from "../ui/Container";
import { GoSearch } from "react-icons/go";
import { GrCart } from "react-icons/gr";

export default function Header() {
  return (
    <header>
      <Container>
        <Wrapper>
          {/* Logo */}
          <Link href="/">
            <Logo>{"Pencils&Inks"}</Logo>
          </Link>

          {/* Search Bar */}
          <SearchContainer>
            <SearchBar type="text" placeholder="Search..." />
            <SearchIcon>
              <GoSearch size={25} color={theme.colors.light} />
            </SearchIcon>
          </SearchContainer>

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
`;

const Logo = styled.a`
  font-size: ${theme.fontSizes.large}rem;
  font-weight: ${theme.fontWeights.bold};
`;

// Search
const SearchContainer = styled.div`
  display: flex;
  height: 50px;
`;

const SearchBar = styled.input`
  padding: 0 1rem;
  border: 2px solid ${theme.colors.gray};
  width: 700px;
  border-radius: 3px;
`;

const SearchIcon = styled.div`
  padding: 0 1.5rem;
  background: ${theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

// Shopping Cart
const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: ${theme.fontWeights.bold};
`;
