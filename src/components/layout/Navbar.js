import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";

export default function Navbar({ isOpen, setIsOpen }) {
  const handleLinkHover = () => {
    console.log("Hovering Link");
  };

  return (
    <Nav isOpen={isOpen}>
      {/* Close Mobile Navbar */}
      <CloseIcon>
        <IoClose size={35} onClick={() => setIsOpen(false)} />
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
              <Link href="/pencils/mechanical-pencils">Mechanical Pencils</Link>
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
    </Nav>
  );
}

// Styles
const CloseIcon = styled.div`
  text-align: right;
  display: block;
  ${theme.mq()[1]} {
    display: none;
  }
`;

const Nav = styled.nav`
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
