import React, { useContext } from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";
import SubNav from "./SubNav";
import { IoIosArrowDown } from "react-icons/io";
import { User } from "../../context/UserProvider";

export default function NavLi({ data, show, setShow, isSubNav = true }) {
  const [user] = useContext(User);

  return (
    <>
      {isSubNav ? (
        // If the li has a sub-nav, render this.
        <Li
          // Handles the display of the sub-nav menus
          onMouseEnter={() => window.innerWidth >= 992 && setShow(true)}
          onMouseLeave={() => window.innerWidth >= 992 && setShow(false)}
          // Event for Tablet & Mobile.
          onClick={() => window.innerWidth < 992 && setShow(!show)}
        >
          <LinkContainer>
            <Link href={data.mainNav.url}>
              <a>{data.mainNav.name}</a>
            </Link>
            <DownArrow size={17} color={theme.colors.neutralDark} />
          </LinkContainer>

          {/* Sub-links */}
          {data.mainNav.name === "Account" && user !== null ? (
            // If user is logged in, render a different subnav
            <SubNav showNav={show} data={data.isLoggedIn} />
          ) : (
            //  Else render the regular subNav
            <SubNav showNav={show} data={data.subNav} />
          )}
        </Li>
      ) : (
        // Else if there is no sub-nav, render simple link.
        <Li>
          <Link href="/">
            <a>{data.name}</a>
          </Link>
        </Li>
      )}
    </>
  );
}

// Styles
const Li = styled.li`
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
