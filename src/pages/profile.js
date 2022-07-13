import Layout from "../components/layout/Layout";
import { Container } from "../components/ui";
import { useState, useContext } from "react";
import { User } from "../context/UserProvider";
import styled from "@emotion/styled";
import theme from "../styles/theme";

export default function Profile() {
  const [user, setUser] = useContext(User);

  return (
    <Layout>
      <Container>
        <Section>
          <Title>My Profile</Title>
          <p>Email: {user && user.email}</p>
        </Section>
      </Container>
    </Layout>
  );
}

// Styles
const Section = styled.section`
  padding: 2rem 0;
`;

const Title = styled.h1`
  text-align: left;
`;
