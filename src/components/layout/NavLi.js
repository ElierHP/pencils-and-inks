import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import Link from "next/link";
import SubNav from "./SubNav";
import { IoIosArrowDown } from "react-icons/io";

export default function NavLi({ data, show, setShow, isSubNav = true }) {
  return (
    <>
      {isSubNav ? (
        // If the li has a sub-nav, render this.
        <Li
          // Handles the display of the sub-nav menus
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onClick={() => setShow(!show)}
        >
          <LinkContainer>
            <Link href={data.mainNav.url}>{data.mainNav.name}</Link>
            <DownArrow size={17} color={theme.colors.neutralDark} />
          </LinkContainer>

          {/* Pencils sub-links */}
          <SubNav showNav={show} data={data.subNav} />
        </Li>
      ) : (
        // Else if there is no sub-nav, render simple link.
        <Li>
          <Link href="/">{data.name}</Link>
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