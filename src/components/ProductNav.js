import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { MdKeyboardArrowRight } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

export default function ProductNav({ links }) {
  return (
    <PageNav>
      {links.map((link) => (
        <Wrapper key={uuidv4()}>
          {/* Check last item in links array and render different styles for it. */}
          {links.slice(-1)[0] === link ? (
            <CurrentPage>{link}</CurrentPage>
          ) : (
            <>
              {/* If link is home, link to "/". Otherwise link to /pencils or /papers etc. */}
              <Link href={link === "Home" ? "/" : `/${link.toLowerCase()}`}>
                <a>{link}</a>
              </Link>
              <MdKeyboardArrowRight color={theme.colors.neutral} size={20} />
            </>
          )}
        </Wrapper>
      ))}
    </PageNav>
  );
}

// Styles
const PageNav = styled.div`
  display: flex;
  padding-bottom: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentPage = styled.span`
  color: ${theme.colors.neutralDark};
`;
