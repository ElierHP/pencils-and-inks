import { css, Global } from "@emotion/react";
import theme from "./theme";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        html {
          font-size: 62.5%;
        }
        ,
        h1,
        h2,
        h3,
        p,
        a,
        div,
        li {
          font-family: ${theme.fonts.body};
          font-size: ${theme.fontSizes.medium}rem;
          letter-spacing: ${theme.letterSpacing.body}px;
          line-height: ${theme.lineHeights.body};
          color: ${theme.colors.dark};
          text-decoration: none;
          list-style: none;
          box-sizing: border-box;
        }
        ,
        h1 {
          font-size: ${theme.fontSizes.mobileHeading}rem;
          margin-top: 0;
          margin-bottom: 2rem;
          line-height: ${theme.lineHeights.heading};
          ${theme.mq()[1]} {
            font-size: ${theme.fontSizes.largeHeading}rem;
          }
        }
        ,
        h2 {
          font-size: ${theme.fontSizes.heading}rem;
          margin-bottom: 1rem;
        }
        ,
        h3 {
          font-size: ${theme.fontSizes.large}rem;
        }
      `}
    />
  );
}
