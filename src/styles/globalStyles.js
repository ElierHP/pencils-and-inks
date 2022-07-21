import { css, Global } from "@emotion/react";
import theme from "./theme";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        ,
        html {
          font-size: 62.5%;
          box-sizing: inherit;
        }
        ,
        body {
          font-family: ${theme.fonts.body};
          font-size: ${theme.fontSizes.medium}rem;
          font-weight: ${theme.fontWeights.body};
          letter-spacing: ${theme.letterSpacing.body}px;
          line-height: ${theme.lineHeights.body};
          color: ${theme.colors.dark};
        }
        ,
        p {
          margin: 0;
        }
        ,
        ul,
        ol {
          list-style: none;
          padding: 0;
        }
        ,
        a {
          text-decoration: none;
          color: ${theme.colors.dark};
          font-weight: ${theme.fontWeights.body};
          transition: ${theme.transition.color};
          &:hover {
            color: ${theme.colors.hover};
          }
        }
        ,
        input,
        select {
          border-radius: 4px;
          border: 2px solid ${theme.colors.neutralLight};
          &:focus {
            outline: none;
            border: 2px solid ${theme.colors.btnHover};
          }
        }
        ,
        button,
        input[type="submit"] {
          border: 0;
          transition: ${theme.transition.primary};
          border-radius: 4px;
          cursor: pointer;
          &:hover {
            background: ${theme.colors.btnHover};
          }
          &:focus {
            outline: none;
            border: none;
          }
        }
        ,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: ${theme.fontWeights.bold};
          line-height: ${theme.lineHeights.heading};
          margin: 1rem 0;
        }
        ,
        h1 {
          font-size: ${theme.fontSizes.heading}rem;
        }
        ,
        h2 {
          font-size: ${theme.fontSizes.large}rem;
        }
        ,
        h3 {
          font-size: ${theme.fontSizes.mediumLarge}rem;
        }
      `}
    />
  );
}
