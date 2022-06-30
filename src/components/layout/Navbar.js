import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";

export default function Navbar({ isOpen, setIsOpen }) {
  const [showPencils, setShowPencils] = useState(false);
  const [showPapers, setShowPapers] = useState(false);
  const [showInks, setShowInks] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  return (
    <Nav isOpen={isOpen}>
      {/* Close Mobile Navbar */}
      <CloseIcon>
        <IoClose size={35} onClick={() => setIsOpen(false)} />
      </CloseIcon>

      {/* Navbar Links*/}
      <NavUl>
        {/* Home Page Link */}
        <li>
          <Link href="/">Home</Link>
        </li>

        {/* Pencils Link */}
        <NavLi
          onMouseEnter={() => setShowPencils(true)}
          onMouseLeave={() => setShowPencils(false)}
        >
          <Link href="/pencils">Pencils</Link>
          <IoIosArrowDown size={17} />

          {/* Pencils sub-links */}
          <SubNav showNav={showPencils}>
            <li>
              <Link href="/pencils/graphite-pencils">Graphite Pencils</Link>
            </li>
            <li>
              <Link href="/pencils/color-pencils">Color Pencils</Link>
            </li>
            <li>
              <Link href="/pencils/mechanical-pencils">Mechanical Pencils</Link>
            </li>
          </SubNav>
        </NavLi>

        {/* Papers Link */}
        <NavLi
          onMouseEnter={() => setShowPapers(true)}
          onMouseLeave={() => setShowPapers(false)}
        >
          <Link href="/papers">Papers</Link>
          <IoIosArrowDown size={17} />

          {/* Papers sub-links */}
          <SubNav showNav={showPapers}>
            <li>
              <Link href="/papers/sketch-paper">Sketch Paper</Link>
            </li>
            <li>
              <Link href="/papers/sketchbooks">Sketchbooks</Link>
            </li>
          </SubNav>
        </NavLi>

        {/* Ink Links */}
        <NavLi
          onMouseEnter={() => setShowInks(true)}
          onMouseLeave={() => setShowInks(false)}
        >
          <Link href="/inks">Inks</Link>
          <IoIosArrowDown size={17} />

          {/* Inks sub-links */}
          <SubNav showNav={showInks}>
            <li>
              <Link href="/inks/artist-inks">Artist Inks</Link>
            </li>
            <li>
              <Link href="/inks/inking-pens">Inking Pens</Link>
            </li>
          </SubNav>
        </NavLi>

        {/* Account Links */}
        <NavLi
          onMouseEnter={() => setShowAccount(true)}
          onMouseLeave={() => setShowAccount(false)}
        >
          <Link href="/profile">My Account</Link>
          <IoIosArrowDown size={17} />

          {/* Account sub-links */}
          <SubNav showNav={showAccount}>
            <li>
              <Link href="/profile">View Profile</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">New Account</Link>
            </li>
          </SubNav>
        </NavLi>
      </NavUl>
    </Nav>
  );
}

// Styles

// X icon that closes mobile menu
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

// Navbar with all the sub-links
const SubNav = styled.ul`
  display: ${(props) => (props.showNav ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 2rem;
  width: 200px;
  padding: 2rem 1rem;
  background: ${theme.colors.light};
`;
