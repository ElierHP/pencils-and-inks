import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Navbar({ isOpen, setIsOpen }) {
  const [showPencils, setShowPencils] = useState(false);
  const [showPapers, setShowPapers] = useState(false);
  const [showInks, setShowInks] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

  return (
    <Nav isOpen={isOpen}>
      {/* Closes Mobile Menu */}
      <CloseIcon>
        <IoClose
          size={30}
          color={theme.colors.darkNeutral}
          onClick={() => setIsOpen(false)}
        />
      </CloseIcon>

      {/* Navbar Links*/}
      <NavUl>
        {/* Home Page Link */}
        <li>
          <Link href="/">Home</Link>
        </li>

        {/* Pencils Link */}
        <li
          onMouseEnter={() => setShowPencils(true)}
          onMouseLeave={() => setShowPencils(false)}
        >
          <LinkContainer>
            <Link href="/pencils">Pencils</Link>
            <DownArrow size={17} color={theme.colors.darkNeutral} />
          </LinkContainer>

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
        </li>

        {/* Papers Link */}
        <li
          onMouseEnter={() => setShowPapers(true)}
          onMouseLeave={() => setShowPapers(false)}
        >
          <LinkContainer>
            <Link href="/papers">Papers</Link>
            <DownArrow size={17} color={theme.colors.darkNeutral} />
          </LinkContainer>

          {/* Papers sub-links */}
          <SubNav showNav={showPapers}>
            <li>
              <Link href="/papers/sketch-paper">Sketch Paper</Link>
            </li>
            <li>
              <Link href="/papers/sketchbooks">Sketchbooks</Link>
            </li>
          </SubNav>
        </li>

        {/* Ink Links */}
        <li
          onMouseEnter={() => setShowInks(true)}
          onMouseLeave={() => setShowInks(false)}
        >
          <LinkContainer>
            <Link href="/inks">Inks</Link>
            <DownArrow size={17} color={theme.colors.darkNeutral} />
          </LinkContainer>

          {/* Inks sub-links */}
          <SubNav showNav={showInks}>
            <li>
              <Link href="/inks/artist-inks">Artist Inks</Link>
            </li>
            <li>
              <Link href="/inks/inking-pens">Inking Pens</Link>
            </li>
          </SubNav>
        </li>

        {/* Account Links */}
        <li
          onMouseEnter={() => setShowAccount(true)}
          onMouseLeave={() => setShowAccount(false)}
        >
          <LinkContainer>
            <Link href="/profile">My Account</Link>
            <DownArrow size={17} color={theme.colors.darkNeutral} />
          </LinkContainer>

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
        </li>
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
  width: 50%;
  ${theme.mq()[1]} {
    display: block;
    position: relative;
    height: initial;
    width: initial;
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

// Aligns arrow icon with the links
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${theme.mq()[1]} {
    justify-content: center;
  }
`;

const DownArrow = styled(IoIosArrowDown)`
  cursor: pointer;
`;

// Navbar with all the sub-links
const SubNav = styled.ul`
  display: ${(props) => (props.showNav ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: ${theme.colors.lightNeutral};
  border-radius: 5px;
  margin-top: 0.5rem;
  font-weight: ${theme.fontWeights.body};
  ${theme.mq()[1]} {
    position: absolute;
    top: 2rem;
    width: 200px;
    padding: 2rem 1rem;
    background: ${theme.colors.light};
    margin-top: 0;
  }
`;
