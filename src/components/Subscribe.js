import React from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { FaMailBulk } from "react-icons/fa";
import Section from "./ui/Section";
import Button from "./ui/Button";
import SearchInput from "./ui/TextInput";

export default function Subscribe() {
  return (
    <Section>
      <Wrapper>
        <FaMailBulk size={80} color={theme.colors.neutralDark} />
        <h2>Let's Keep In Touch!</h2>
        <p>
          Subscribe to receive special offers, giveaways, and exclusive deals.
        </p>
        <EmailInput>
          <SearchInput type="email" placeholder={"Email address."} />
          <Button>Subscribe</Button>
        </EmailInput>
      </Wrapper>
    </Section>
  );
}

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  gap: 2rem;
`;

const EmailInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${theme.mq()[1]} {
    max-width: 400px;
    flex-direction: row;
  }
`;
