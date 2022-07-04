const theme = {
  fonts: {
    body: "montserrat, sans-serif",
  },
  fontSizes: {
    small: 1.4,
    medium: 1.6,
    large: 2.4,
    heading: 3.2,
    largeHeading: 6,
  },
  fontWeights: {
    thin: 300,
    body: 400,
    bold: 600,
    bolder: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1,
  },
  letterSpacing: {
    body: 0.5,
    heading: 2,
  },
  colors: {
    primary: "#BA4343",
    dark: "black",
    light: "white",
    neutral: "#dcdcdc",
    neutralLight: "#EEEEEE",
    neutralDark: "#6F6F6F",
    hover: "#FFD685",
    btnHover: "#E7AD56",
  },
  space: {
    section: 5,
  },
  transition: {
    primary: "all 0.3s ease-in-out",
    secondary: "all 0.5s ease-in-out",
  },
  breakpoints: [576, 768, 992, 1200],
  mq() {
    return this.breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
  },
};

export default theme;
