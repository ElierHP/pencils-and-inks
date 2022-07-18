import Footer from "./Footer";
import Header from "./Header";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/* <Line></Line> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}

// Styles
const Line = styled.div`
  border-bottom: 2px solid ${theme.colors.neutralLight};
  margin-bottom: 3rem;
  opacity: 0.6;
`;
