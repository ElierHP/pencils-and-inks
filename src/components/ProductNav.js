import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ProductNav({ links, category }) {
  return (
    <PageNav>
      {links.map((link) => (
        <>
          {/* Check last item in links array and render different styles for it. */}
          {links.slice(-1)[0] === link ? (
            <CurrentPage>{link}</CurrentPage>
          ) : (
            <>
              {/* If link is "Home", link to "/" */}
              {/* Otherwise, link to /pencils/colored-pencils (example) */}
              <Link href={link === "Home" ? "/" : `/${category}/${link}`}>
                <a>{link}</a>
              </Link>
              <MdKeyboardArrowRight color={theme.colors.neutral} size={20} />
            </>
          )}
        </>
      ))}
    </PageNav>
  );
}

// Styles
const PageNav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

const CurrentPage = styled.span`
  color: ${theme.colors.neutralDark};
`;
