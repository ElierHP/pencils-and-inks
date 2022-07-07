import React from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme";
import { FaMailBulk } from "react-icons/fa";
import { Section, Button, TextInput } from "./ui";

export default function Subscribe() {
  return (
    <Section>
      <Wrapper>
        <FaMailBulk size={80} color={theme.colors.neutralDark} />
        <Heading>Let's Keep In Touch!</Heading>
        <p>
          Subscribe to receive special offers, giveaways, and exclusive deals.
        </p>
        <EmailInput>
          <TextInput type="email" placeholder={"Email address..."} />
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

const Heading = styled.h2`
  margin: 0;
`;

const EmailInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 40px;
  ${theme.mq()[1]} {
    max-width: 400px;
    flex-direction: row;
    height: "initial";
  }
`;
