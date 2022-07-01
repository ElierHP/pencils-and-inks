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
      {/* Navbar Links*/}
      <NavUl>
        {/* Closes Mobile Menu */}
        <CloseIcon>
          <IoClose
            size={30}
            color={theme.colors.neutralDark}
            onClick={() => setIsOpen(false)}
          />
        </CloseIcon>
        {/* Home Page Link */}
        <NavLi>
          <Link href="/">Home</Link>
        </NavLi>

        {/* Pencils Link */}
        <NavLi
          onMouseEnter={() => setShowPencils(true)}
          onMouseLeave={() => setShowPencils(false)}
          onClick={() => setShowPencils(!showPencils)}
        >
          <LinkContainer>
            <Link href="/pencils">Pencils</Link>
            <DownArrow size={17} color={theme.colors.neutralDark} />
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
        </NavLi>

        {/* Papers Link */}
        <NavLi
          onMouseEnter={() => setShowPapers(true)}
          onMouseLeave={() => setShowPapers(false)}
          onClick={() => setShowPapers(!showPapers)}
        >
          <LinkContainer>
            <Link href="/papers">Papers</Link>
            <DownArrow size={17} color={theme.colors.neutralDark} />
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
        </NavLi>

        {/* Ink Links */}
        <NavLi
          onMouseEnter={() => setShowInks(true)}
          onMouseLeave={() => setShowInks(false)}
          onClick={() => setShowInks(!showInks)}
        >
          <LinkContainer>
            <Link href="/inks">Inks</Link>
            <DownArrow size={17} color={theme.colors.neutralDark} />
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
        </NavLi>

        {/* Account Links */}
        <NavLi
          onMouseEnter={() => setShowAccount(true)}
          onMouseLeave={() => setShowAccount(false)}
          onClick={() => setShowAccount(!showAccount)}
        >
          <LinkContainer>
            <Link href="/profile">My Account</Link>
            <DownArrow size={17} color={theme.colors.neutralDark} />
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
  ${theme.mq()[2]} {
    display: none;
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50%;
  background: ${theme.colors.light};
  padding: 2rem;

  /* Animations */
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-400px)"};
  transition: ${theme.transition.secondary};

  ${theme.mq()[1]} {
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-600px)"};
    width: 30%;
  }

  ${theme.mq()[2]} {
    display: block;
    position: relative;
    height: initial;
    width: initial;
    padding: 0;
    transform: translateX(0);
  }
`;

const NavUl = styled.ul`
  display: flex;
  align-items: left;
  flex-direction: column;
  font-weight: ${theme.fontWeights.bold};
  gap: 3rem;

  ${theme.mq()[2]} {
    justify-content: space-between;
    align-items: center;
    padding: 0 10rem;
    flex-direction: row;
    position: relative;
    gap: 0;
  }
`;

const NavLi = styled.li`
  padding: 1rem 0;
  cursor: pointer;
`;

// Aligns arrow icon with the links
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Z-index to place LinksContainer infront of SubNav */
  position: relative;
  z-index: 2;

  ${theme.mq()[2]} {
    justify-content: center;
  }
`;

const DownArrow = styled(IoIosArrowDown)`
  cursor: pointer;
`;

// Navbar with all the sub-links
const SubNav = styled.ul`
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
