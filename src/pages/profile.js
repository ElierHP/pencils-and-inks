import { useContext, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Container } from "../components/ui";
import { User } from "../context/UserProvider";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Profile() {
  const [user] = useContext(User);
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      {user !== null && (
        <Layout>
          <Container>
            <Section>
              <Title>My Profile</Title>
              <p>Email: {user && user.email}</p>
            </Section>
          </Container>
        </Layout>
      )}
    </>
  );
}

// Styles
const Section = styled.section`
  padding: 2rem 0;
`;

const Title = styled.h1`
  text-align: left;
`;
