import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { IoClose } from "react-icons/io5";
import {
  pencilNavData,
  paperNavData,
  inksNavData,
  accountNavData,
} from "./data/navData";
import NavLi from "./NavLi";

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
        <NavLi data={{ name: "Home" }} isSubNav={false} />

        {/* Pencils Links */}
        <NavLi
          data={pencilNavData}
          show={showPencils}
          setShow={setShowPencils}
        />

        {/* Papers Links */}
        <NavLi data={paperNavData} show={showPapers} setShow={setShowPapers} />

        {/* Ink Links */}
        <NavLi data={inksNavData} show={showInks} setShow={setShowInks} />

        {/* Account Links */}
        <NavLi
          data={accountNavData}
          show={showAccount}
          setShow={setShowAccount}
        />
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
